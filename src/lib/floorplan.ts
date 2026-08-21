import lantai1 from "@/assets/denah-lantai-1.jpg.asset.json";
import lantai2 from "@/assets/denah-lantai-2.jpg.asset.json";
import lantai3 from "@/assets/denah-lantai-3.jpg.asset.json";
import rooftop from "@/assets/denah-rooftop.jpg.asset.json";

export type FloorKey = "1" | "2" | "3" | "rooftop";

export type Hotspot = {
  id: string;
  label: string;
  type: "kamar" | "umum";
  /** nomor kamar pada tabel rooms, untuk hotspot tipe kamar */
  roomNumber?: string;
  /** kata kunci lokasi untuk mencocokkan barang fasilitas bersama */
  locationMatch?: string[];
  /** koordinat dalam persen terhadap ukuran gambar */
  x: number;
  y: number;
  w: number;
  h: number;
};

export type FloorPlan = {
  key: FloorKey;
  label: string;
  short: string;
  image: string;
  hotspots: Hotspot[];
};

function kamar(id: string, roomNumber: string, x: number, y: number, w: number, h: number): Hotspot {
  return { id, label: `Kamar ${roomNumber}`, type: "kamar", roomNumber, x, y, w, h };
}

function umum(
  id: string,
  label: string,
  locationMatch: string[],
  x: number,
  y: number,
  w: number,
  h: number,
): Hotspot {
  return { id, label, type: "umum", locationMatch, x, y, w, h };
}

/** Baris atas & bawah pada denah lantai (persen terhadap gambar 1024x1024). */
const TOP_Y = 23.5;
const TOP_H = 15.5;
const BOTTOM_Y = 48.5;
const BOTTOM_H = 15.5;

const lantai1Hotspots: Hotspot[] = [
  kamar("l1-001", "001", 14.2, 24, 11.4, 14),
  kamar("l1-002", "002", 26.4, TOP_Y + 2, 11.4, TOP_H),
  kamar("l1-003", "003", 38.2, TOP_Y + 2, 11.4, TOP_H),
  kamar("l1-004", "004", 50, TOP_Y + 2, 11.4, TOP_H),
  kamar("l1-005", "005", 74.5, TOP_Y + 2, 12, TOP_H),
  kamar("l1-006", "006", 14.2, 55, 11.4, 10),
  kamar("l1-007", "007", 26.4, BOTTOM_Y, 11.4, BOTTOM_H),
  kamar("l1-008", "008", 38.2, BOTTOM_Y, 11.4, BOTTOM_H),
  kamar("l1-009", "009", 50, BOTTOM_Y, 11.4, BOTTOM_H),
  kamar("l1-010", "010", 61.8, BOTTOM_Y, 11.4, BOTTOM_H),
  umum("l1-lobby", "Lobby", ["lobby", "depan", "resepsionis"], 74.5, 47, 12, 17),
  umum("l1-selasar", "Selasar Lantai 1", ["selasar", "koridor", "lantai 1"], 26.4, 41.5, 59, 5.5),
  umum("l1-dapur", "Dapur / KMD Lantai 1", ["dapur", "kmd", "lantai 1"], 14.2, 41.5, 10, 12),
  umum("l1-tangga", "Tangga Lantai 1", ["tangga", "lantai 1"], 66, 24, 9, 18),
];

const lantai2Hotspots: Hotspot[] = [
  kamar("l2-011", "011", 14.2, 24, 11.4, 14),
  kamar("l2-012", "012", 26.4, TOP_Y + 2, 11.4, TOP_H),
  kamar("l2-013", "013", 38.2, TOP_Y + 2, 11.4, TOP_H),
  kamar("l2-014", "014", 50, TOP_Y + 2, 11.4, TOP_H),
  kamar("l2-015", "015", 74.5, TOP_Y + 2, 12, TOP_H),
  kamar("l2-016", "016", 14.2, 55, 11.4, 10),
  kamar("l2-017", "017", 26.4, BOTTOM_Y, 11.4, BOTTOM_H),
  kamar("l2-018", "018", 38.2, BOTTOM_Y, 11.4, BOTTOM_H),
  kamar("l2-019", "019", 50, BOTTOM_Y, 11.4, BOTTOM_H),
  kamar("l2-020", "020", 61.8, BOTTOM_Y, 11.4, BOTTOM_H),
  kamar("l2-021", "021", 74.5, BOTTOM_Y, 12, BOTTOM_H),
  umum("l2-selasar", "Selasar Lantai 2", ["selasar", "koridor", "lantai 2"], 26.4, 41.5, 55, 5.5),
  umum("l2-balkon", "Balkon Lantai 2", ["balkon", "lantai 2"], 81, 41.5, 6.5, 5.5),
  umum("l2-dapur", "Dapur / KMD Lantai 2", ["dapur", "kmd", "lantai 2"], 14.2, 41.5, 10, 12),
  umum("l2-tangga", "Tangga Lantai 2", ["tangga", "lantai 2"], 62.5, 24, 10, 16),
];

const lantai3Hotspots: Hotspot[] = [
  kamar("l3-022", "022", 14.2, 24, 11.4, 14),
  kamar("l3-023", "023", 26.4, TOP_Y + 2, 11.4, TOP_H),
  kamar("l3-024", "024", 38.2, TOP_Y + 2, 11.4, TOP_H),
  kamar("l3-025", "025", 50, TOP_Y + 2, 11.4, TOP_H),
  kamar("l3-026", "026", 74.5, TOP_Y + 2, 12, TOP_H),
  kamar("l3-027", "027", 14.2, 55, 11.4, 10),
  kamar("l3-028", "028", 26.4, BOTTOM_Y, 11.4, BOTTOM_H),
  kamar("l3-029", "029", 38.2, BOTTOM_Y, 11.4, BOTTOM_H),
  kamar("l3-030", "030", 50, BOTTOM_Y, 11.4, BOTTOM_H),
  kamar("l3-031", "031", 74.5, BOTTOM_Y, 12, BOTTOM_H),
  umum("l3-lobby", "Lobby Lantai 3", ["lobby", "lantai 3"], 61.8, BOTTOM_Y, 11.4, BOTTOM_H),
  umum("l3-selasar", "Selasar Lantai 3", ["selasar", "koridor", "lantai 3"], 26.4, 41.5, 55, 5.5),
  umum("l3-balkon", "Balkon Lantai 3", ["balkon", "lantai 3"], 81, 41.5, 6.5, 5.5),
  umum("l3-dapur", "Dapur / KMD Lantai 3", ["dapur", "kmd", "lantai 3"], 14.2, 41.5, 10, 12),
  umum("l3-tangga", "Tangga Lantai 3", ["tangga", "lantai 3"], 62.5, 24, 10, 16),
];

/** Rooftop memakai gambar 1160x933, jadi persentasenya berbeda. */
const rooftopHotspots: Hotspot[] = [
  umum("rt-dak-1", "Dak Atap Barat", ["dak", "atap", "rooftop"], 17.8, 21.5, 11, 21),
  umum("rt-atap-1", "Atap Kamar Utara", ["atap", "rooftop"], 29, 21.5, 33, 21),
  umum("rt-atap-2", "Atap Kamar Selatan", ["atap", "rooftop"], 17.8, 46.5, 44.2, 20),
  umum("rt-dak-2", "Dak Atap Tengah", ["dak", "atap", "rooftop"], 43, 42.5, 19, 4),
  umum("rt-tangga", "Tangga / Turun", ["tangga", "rooftop"], 62.5, 22, 10, 19),
  umum("rt-rooftop", "Rooftop Tengah", ["rooftop", "santai"], 62.5, 41.5, 10, 8),
  umum("rt-cuci", "Cuci Jemur", ["cuci", "jemur", "rooftop"], 62.5, 50, 10, 15),
  umum("rt-rooftop-timur", "Rooftop Timur", ["rooftop", "taman", "santai"], 73, 21.5, 11.5, 44),
];

export const FLOOR_PLANS: FloorPlan[] = [
  { key: "1", label: "Lantai 1", short: "L1", image: lantai1.url, hotspots: lantai1Hotspots },
  { key: "2", label: "Lantai 2", short: "L2", image: lantai2.url, hotspots: lantai2Hotspots },
  { key: "3", label: "Lantai 3", short: "L3", image: lantai3.url, hotspots: lantai3Hotspots },
  { key: "rooftop", label: "Rooftop", short: "RT", image: rooftop.url, hotspots: rooftopHotspots },
];

export function floorPlan(key: FloorKey): FloorPlan {
  return FLOOR_PLANS.find((f) => f.key === key) ?? FLOOR_PLANS[0]!;
}

export function floorKeyForRoom(floor: number): FloorKey {
  return floor === 2 ? "2" : floor === 3 ? "3" : "1";
}

export const MAPPED_ROOM_NUMBERS = new Set(
  FLOOR_PLANS.flatMap((f) => f.hotspots.map((h) => h.roomNumber).filter(Boolean) as string[]),
);

export function matchesLocation(location: string | null, keywords: string[] | undefined) {
  if (!location || !keywords?.length) return false;
  const value = location.toLowerCase();
  return keywords.some((k) => value.includes(k.toLowerCase()));
}
