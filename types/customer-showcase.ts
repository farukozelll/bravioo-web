export type TileType = 'video' | 'quote';

export type TestimonialTile = {
  id: string;
  variant: string;      // criteo | discover | ...
  type: TileType;       // video | quote
  logo: string;         // logo dosyasının yolu
  closedBg?: string;    // kapalı durumda background
  openBg?: string;      // açılınca background
  videoUrl?: string;    // type=video olursa
  title?: string;       // alt başlık
  stat?: string;        // %94 vb.
  statLabel?: string;   // "Activation rate in 7 days"
  quote?: string;       // type=quote olursa
  author?: string;      // quote için yazar
  authorTitle?: string; // quote için yazar pozisyonu
};
