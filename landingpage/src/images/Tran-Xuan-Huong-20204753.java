public class Main
{
	public static void main(String[] args){
		CongTy abc = new CongTy("abc",0);
		NhanVien a = new CanBoCoHuu("a", 1000, 12);
		abc.themNV(a);
 		NhanVien b = new CanBoHopDong("b", 20000);
 		abc.themNV(b);
		NhanVien c = new GiamDoc("c", 2000, 14, 100);
		abc.themNV(c);
        NhanVien d = new CanBoQuanLy("d", 2000, 9);
        abc.themNV(d);
		NhanVien e = new TruongPhong("e", 1400, 13, 500);
		abc.themNV(e);
 		abc.inThongTin();
	} 
}
