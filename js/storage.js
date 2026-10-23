export const PREFIX = 'streetStore.v1.';
export const KEYS = Object.freeze({products:PREFIX+'products',categories:PREFIX+'categories',cart:PREFIX+'cart',wishlist:PREFIX+'wishlist',orders:PREFIX+'orders',settings:PREFIX+'settings',account:PREFIX+'account',recent:PREFIX+'recent',adminHash:PREFIX+'adminHash',adminSession:PREFIX+'adminSession'});
export const DEFAULT_CATEGORIES = [
  {id:'cat-electronics',name:'Elektronik',description:'Perangkat dan teknologi',icon:'⌁'},
  {id:'cat-fashion',name:'Fashion',description:'Pilihan untuk gaya sehari-hari',icon:'◈'},
  {id:'cat-accessories',name:'Aksesori',description:'Detail kecil yang berarti',icon:'✳'},
  {id:'cat-home',name:'Peralatan Rumah',description:'Kebutuhan untuk ruangmu',icon:'⌂'},
  {id:'cat-gaming',name:'Gaming',description:'Temani waktu bermain',icon:'▣'},
  {id:'cat-sports',name:'Olahraga',description:'Untuk aktivitasmu',icon:'↗'},
  {id:'cat-beauty',name:'Kecantikan',description:'Perawatan dan personal care',icon:'✧'},
  {id:'cat-other',name:'Lainnya',description:'Temukan kategori lain',icon:'＋'}
];
export const DEFAULT_SETTINGS = Object.freeze({
  storeName:'Street Store', description:'Temukan gayamu. Tunjukkan karaktermu.', whatsapp:'', contactEmail:'', address:'', shippingInfo:'Informasi pengiriman dikonfirmasi bersama penjual.', paymentInfo:'Metode pembayaran dikonfirmasi bersama penjual.', heroTitle:'Temukan gayamu. Tunjukkan karaktermu.', heroSubtitle:'Tempat pilihan baru bertemu gaya sehari-hari. Jelajahi koleksi Street Store dan temukan yang paling cocok untukmu.', heroButton:'Belanja sekarang', heroImage:'', logoUrl:'', footerText:'Curated for your everyday.', shippingFee:0, discount:0, developerName:'MUSYAFFA HANIF SUNNI', developerDepartment:'JURUSAN TJKT', developerSchool:'SMK NEGERI 1 ADIWERNA'
});
export function safeGet(key, fallback){
  try { const raw=localStorage.getItem(key); if(raw===null)return structuredCloneSafe(fallback); return JSON.parse(raw); }
  catch(error){ console.warn('Street Store: data lokal tidak dapat dibaca:',key,error); return structuredCloneSafe(fallback); }
}
function structuredCloneSafe(value){try{return JSON.parse(JSON.stringify(value));}catch{return value;}}
export function safeSet(key,value){
  try { localStorage.setItem(key,JSON.stringify(value)); return {ok:true}; }
  catch(error){ const quota=error?.name==='QuotaExceededError'||error?.name==='NS_ERROR_DOM_QUOTA_REACHED'; return {ok:false,message:quota?'Penyimpanan browser penuh. Hapus sebagian data atau gambar.':'Penyimpanan browser tidak tersedia.'}; }
}
export function readProducts(){const v=safeGet(KEYS.products,[]);return Array.isArray(v)?v.filter(p=>p&&typeof p.id==='string'&&typeof p.name==='string'&&Number.isFinite(Number(p.price))):[];}
export function readCategories(){const v=safeGet(KEYS.categories,DEFAULT_CATEGORIES);return Array.isArray(v)?v.filter(c=>c&&typeof c.id==='string'&&typeof c.name==='string'):structuredCloneSafe(DEFAULT_CATEGORIES);}
export function readSettings(){const v=safeGet(KEYS.settings,{});return {...DEFAULT_SETTINGS,...(v&&typeof v==='object'&&!Array.isArray(v)?v:{})};}
export function readCart(){const v=safeGet(KEYS.cart,[]);return Array.isArray(v)?v.filter(x=>x&&typeof x.id==='string'&&Number.isInteger(Number(x.qty))&&Number(x.qty)>0):[];}
export function readWishlist(){const v=safeGet(KEYS.wishlist,[]);return Array.isArray(v)?[...new Set(v.filter(x=>typeof x==='string'))]:[];}
export function readOrders(){const v=safeGet(KEYS.orders,[]);return Array.isArray(v)?v.filter(o=>o&&typeof o.id==='string'&&Array.isArray(o.items)):[];}
export function readAccount(){const v=safeGet(KEYS.account,{});return v&&typeof v==='object'&&!Array.isArray(v)?v:{};}
export function readRecent(){const v=safeGet(KEYS.recent,[]);return Array.isArray(v)?v.filter(x=>typeof x==='string').slice(0,12):[];}
export function id(prefix='item'){return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`;}
export function escapeHTML(value=''){return String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
export function money(value){const n=Number(value);return Number.isFinite(n)?new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n):'—';}
export function dateTime(value){const d=new Date(value);return Number.isNaN(d.getTime())?'Tanggal tidak tersedia':new Intl.DateTimeFormat('id-ID',{dateStyle:'medium',timeStyle:'short'}).format(d);}
export function normalisePhone(value){return String(value||'').replace(/[^\d+]/g,'');}
export function validImageURL(value){if(!value)return '';try{const u=new URL(value,location.href);return ['http:','https:'].includes(u.protocol)?u.href:'';}catch{return '';}}
export function validateProduct(p){
  if(!p||typeof p!=='object')return 'Data produk tidak valid.';
  if(!String(p.name||'').trim()||String(p.name).length>140)return 'Nama produk wajib diisi (maksimal 140 karakter).';
  if(!Number.isFinite(Number(p.price))||Number(p.price)<0||Number(p.price)>1e12)return 'Harga harus berupa angka yang valid dan tidak negatif.';
  if(!Number.isInteger(Number(p.stock))||Number(p.stock)<0||Number(p.stock)>1e7)return 'Stok harus berupa bilangan bulat 0 atau lebih.';
  if(!String(p.categoryId||''))return 'Pilih kategori produk.';
  if(p.description&&String(p.description).length>5000)return 'Deskripsi terlalu panjang.';
  return '';
}
export function makeExport(){return {format:'street-store-backup',version:1,exportedAt:new Date().toISOString(),products:readProducts(),categories:readCategories(),settings:readSettings(),orders:readOrders()};}
export function validateImport(data){
  if(!data||typeof data!=='object'||Array.isArray(data))return {ok:false,message:'File JSON harus berupa objek data.'};
  if(!['street-store-backup','street-store'].includes(data.format)||!Array.isArray(data.products)||!Array.isArray(data.categories)||!data.settings||typeof data.settings!=='object')return {ok:false,message:'Struktur file tidak sesuai format backup Street Store.'};
  const ids=new Set();for(const p of data.products){const err=validateProduct(p);if(err)return {ok:false,message:`Produk tidak valid: ${err}`};if(!p.id||ids.has(p.id))return {ok:false,message:'ID produk kosong atau duplikat.'};ids.add(p.id);}
  const cids=new Set();for(const c of data.categories){if(!c||!c.id||!String(c.name||'').trim()||String(c.name).length>100||cids.has(c.id))return {ok:false,message:'Terdapat kategori tidak valid atau ID kategori duplikat.'};cids.add(c.id);}
  return {ok:true,data:{...data,orders:Array.isArray(data.orders)?data.orders.filter(o=>o&&typeof o.id==='string'&&Array.isArray(o.items)):[]}};
}
