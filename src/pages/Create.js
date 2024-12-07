import React, { useState } from "react";
import { createCar, importCarData } from "../api/carApi"; // Import hàm từ carApi.js
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Container,
  Alert,
  Box,
  TextareaAutosize,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  Switch,
  Modal
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Create.css";

const CarDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    version: "",
    vehicle_segment: "",
    price: "",
    description: "",
    // Thông số động cơ/hộp số
    kieuDongCo: "",
    dungTich: "",
    congSuat: "",
    momenXoan: "",
    hopso: "",
    heDanDong: "",
    loaiNhienLieu: "",
    mucTieuThuNhienLieu: "",
    // Thông số kích thước/trọng lượng
    soCho: "",
    kichThuoc: "",
    chieuDaiCoSo: "",
    khoangSangGam: "",
    banKinhVongQuay: "",
    theTichKhoangHanhLy: "",
    dungTichBinhNhienLieu: "",
    trongLuongBanThan: "",
    trongLuongToanTai: "",
    lop_lazang: "",

    treoTruoc: "",
    treoSau: "",
    phanhTruoc: "",
    phanhSau: "",
    treoTruoc_checked: false,
    treoSau_checked: false,
    phanhTruoc_checked: false,
    phanhSau_checked: false,

    denPhanhTrenCao: '',
    guongChieuHau: '',
    sayGuongChieuHau: '',
    gatMuaTuDong: '',
    denChieuXa: '',
    denChieuGan: '',
    denBanNgay: '',
    denPhaTuDongBat_Tat: '',
    denPhaTuDongXa_Gan: '',
    denPhaTuDongDieuChinhGocChieu: '',
    denHau: '',
    angTenVayCa: '',
    copDong_MoDien: '',
    moCopRanhTay: '',
    denPhanhTrenCao_checked: false,
    guongChieuHau_checked: false,
    sayGuongChieuHau_checked: false,
    gatMuaTuDong_checked: false,
    denChieuXa_checked: false,
    denChieuGan_checked: false,
    denBanNgay_checked: false,
    denPhaTuDongBat_Tat_checked: false,
    denPhaTuDongXa_Gan_checked: false,
    denPhaTuDongDieuChinhGocChieu_checked: false,
    denHau_checked: false,
    angTenVayCa_checked: false,
    copDong_MoDien_checked: false,
    moCopRanhTay_checked: false,

    chatLieuBocGhe: '',
    dieuChinhGheLai: '',
    nhoViTriGheLai: '',
    massageGheLai: '',
    dieuChinhGhePhu: '',
    massageGhePhu: '',
    thongGioGheLai: '',
    thongGioGhePhu: '',
    suoiAmGheLai: '',
    suoiAmGhePhu: '',
    bangDongHoTaiXe: '',
    nutBamTichHopTrenVolang: '',
    chatLieuBocVoLang: '',
    chiaKhoaThongMinh: '',
    khoiDongNutBam: '',
    dieuHoa: '',
    cuaGioHangGheSau: '',
    cuaKinhMotCham: '',
    cuaSoTroi: '',
    cuaSoTroiToanCanh: '',
    guongChieuHauTrongXeChongChoiTuDong: '',
    tuaTayHangGheTruoc: '',
    tuaTayHangGheSau: '',
    manHinhGiaiTri: '',
    ketNoiAppleCarPlay: '',
    ketNoiAndroidAuto: '',
    raLenhGiongNoi: '',
    damThoaiRanhTay: '',
    heThongLoa: '',
    phatWifi: '',
    ketNoiAUX: '',
    ketNoiUSB: '',
    ketNoiBluetooth: '',
    radioAM_FM: '',
    sacKhongDay: '',
    // Các trường kiểm tra
    chatLieuBocGhe_checked: false,
    dieuChinhGheLai_checked: false,
    nhoViTriGheLai_checked: false,
    massageGheLai_checked: false,
    dieuChinhGhePhu_checked: false,
    massageGhePhu_checked: false,
    thongGioGheLai_checked: false,
    thongGioGhePhu_checked: false,
    suoiAmGheLai_checked: false,
    suoiAmGhePhu_checked: false,
    bangDongHoTaiXe_checked: false,
    nutBamTichHopTrenVolang_checked: false,
    chatLieuBocVoLang_checked: false,
    chiaKhoaThongMinh_checked: false,
    khoiDongNutBam_checked: false,
    dieuHoa_checked: false,
    cuaGioHangGheSau_checked: false,
    cuaKinhMotCham_checked: false,
    cuaSoTroi_checked: false,
    cuaSoTroiToanCanh_checked: false,
    guongChieuHauTrongXeChongChoiTuDong_checked: false,
    tuaTayHangGheTruoc_checked: false,
    tuaTayHangGheSau_checked: false,
    manHinhGiaiTri_checked: false,
    ketNoiAppleCarPlay_checked: false,
    ketNoiAndroidAuto_checked: false,
    raLenhGiongNoi_checked: false,
    damThoaiRanhTay_checked: false,
    heThongLoa_checked: false,
    phatWifi_checked: false,
    ketNoiAUX_checked: false,
    ketNoiUSB_checked: false,
    ketNoiBluetooth_checked: false,
    radioAM_FM_checked: false,
    sacKhongDay_checked: false,

    troLucVoLang: '',
    nhieuCheDoLai: '',
    layChuyenSoTrenVoLang: '',
    kiemSoatGiaToc: '',
    phanhTayDienTu: '',
    giuPhanhTuDong: '',
    troLucVoLang_checked: false,
    nhieuCheDoLai_checked: false,
    layChuyenSoTrenVoLang_checked: false,
    kiemSoatGiaToc_checked: false,
    phanhTayDienTu_checked: false,
    giuPhanhTuDong_checked: false,

    kiemSoatHanhTrinh: '',
    kiemSoatHanhTrinhThichUng: '',
    canhBaoPhuongTienCatNgangKhiLui: '',
    canhBaoTaiXeBuonNgu: '',
    mocGheAnToanChoTreEmIsofix: '',
    hoTroDoDeo: '',
    canhBaoDiemMu: '',
    cameraLui: '',
    camera360: '',
    cameraQuanSatLanDuong: '',
    canhBaoChechLanDuong: '',
    hoTroGiuLan: '',
    hoTroPhanhTuDongGiamThieuVaCham: '',
    phanPhoiLucPhanhDienTu: '',
    canBangDienTu: '',
    kiemSoatLucKeo: '',
    hoTroKhoiHanhNgangDoc: '',
    soTuiKhi: '',
    chongBoCungPhanh: '',
    hoTroLucPhanhKhanCap: '',
    // Các trường kiểm tra
    kiemSoatHanhTrinh_checked: false,
    kiemSoatHanhTrinhThichUng_checked: false,
    canhBaoPhuongTienCatNgangKhiLui_checked: false,
    canhBaoTaiXeBuonNgu_checked: false,
    mocGheAnToanChoTreEmIsofix_checked: false,
    hoTroDoDeo_checked: false,
    canhBaoDiemMu_checked: false,
    cameraLui_checked: false,
    camera360_checked: false,
    cameraQuanSatLanDuong_checked: false,
    canhBaoChechLanDuong_checked: false,
    hoTroGiuLan_checked: false,
    hoTroPhanhTuDongGiamThieuVaCham_checked: false,
    phanPhoiLucPhanhDienTu_checked: false,
    canBangDienTu_checked: false,
    kiemSoatLucKeo_checked: false,
    hoTroKhoiHanhNgangDoc_checked: false,
    soTuiKhi_checked: false,
    chongBoCungPhanh_checked: false,
    hoTroLucPhanhKhanCap_checked: false,
  });

  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [open, setOpen] = useState(false);
  const [jsonData, setJsonData] = useState([]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...urls]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createCar(formData, images); // Gọi hàm createCar
      setSuccess("Thêm sản phẩm thành công!");
      setError(null);
      // Reset form hoặc điều hướng đến trang khác nếu cần
      setFormData({
        name: "",
        brand: "",
        version: "",
        vehicle_segment: "",
        price: "",
        description: "",
      });
      setImages([]);
    } catch (err) {
      setError("Có lỗi xảy ra khi thêm sản phẩm!");
      setSuccess(null);
    }
  };

  // const handleFileSubmit = async () => {
  //   try {
  //     const result = await importCarData(jsonData);
  //     if (result.code === 200) {
  //       setSuccess("Import file thành công!");
  //       setError(null);
  //     } else {
  //       setError(result.message);
  //       setSuccess(null);
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //     setSuccess(null);
  //   }
  // };
  const handleFileSubmit = async () => {
    try {
      const result = await importCarData(jsonData);
  
      // Kiểm tra mã lỗi từ API, nếu mã lỗi là 200 thì import thành công
      if (result.code === 200) {
        // Kiểm tra xem có sản phẩm trùng lặp không
        const duplicates = result.results.filter((item) => item.status === 'duplicate');
        if (duplicates.length > 0) {
          // Nếu có trùng lặp, thông báo cho người dùng
          setError("Có sản phẩm trùng lặp: " + duplicates.map(d => d.message).join(", "));
          setSuccess(null);
        } else {
          // Nếu không có trùng lặp, thông báo thành công
          setSuccess("Import file thành công!");
          setError(null);
        }
      } else {
        // Nếu API trả về mã lỗi khác, thông báo lỗi chung
        setError(result.message);
        setSuccess(null);
      }
    } catch (error) {
      // Xử lý lỗi nếu có lỗi khi tải file
      setError(error.message);
      setSuccess(null);
    }
  };
  

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                setJsonData(
                    data.map((item) => ({
                        // Thông số cơ bản
                        name: item.name || "Đang cập nhật",
                        description: item.description || "Đang cập nhật",
                        brand: item.brand || "Đang cập nhật",
                        version: item.version || "Đang cập nhật",
                        vehicle_segment: item.vehicle_segment || "Đang cập nhật",
                        engine: item.engine || "Đang cập nhật",
                        price: item.price || "Đang cập nhật",
                        imageUrl: item.imageUrl || [],

                        // Động cơ/hộp số
                        kieuDongCo: item.kieuDongCo || "Đang cập nhật",
                        dungTich: item.dungTich || "Đang cập nhật",
                        congSuat: item.congSuat || "Đang cập nhật",
                        momenXoan: item.momenXoan || "Đang cập nhật",
                        hopso: item.hopso || "Đang cập nhật",
                        heDanDong: item.heDanDong || "Đang cập nhật",
                        loaiNhienLieu: item.loaiNhienLieu || "Đang cập nhật",
                        mucTieuThuNhienLieu: item.mucTieuThuNhienLieu || "Đang cập nhật",

                        // Kích thước/Trọng lượng
                        soCho: item.soCho || "Đang cập nhật",
                        kichThuoc: item.kichThuoc || "Đang cập nhật",
                        chieuDaiCoSo: item.chieuDaiCoSo || "Đang cập nhật",
                        khoangSangGam: item.khoangSangGam || "Đang cập nhật",
                        banKinhVongQuay: item.banKinhVongQuay || "Đang cập nhật",
                        theTichKhoangHanhLy: item.theTichKhoangHanhLy || "Đang cập nhật",
                        dungTichBinhNhienLieu: item.dungTichBinhNhienLieu || "Đang cập nhật",
                        trongLuongBanThan: item.trongLuongBanThan || "Đang cập nhật",
                        trongLuongToanTai: item.trongLuongToanTai || "Đang cập nhật",
                        lop_lazang: item.lop_lazang || "Đang cập nhật",

                        // Hệ thống treo/phanh
                        treoTruoc: item.treoTruoc || "Đang cập nhật",
                        treoSau: item.treoSau || "Đang cập nhật",
                        phanhTruoc: item.phanhTruoc || "Đang cập nhật",
                        phanhSau: item.phanhSau || "Đang cập nhật",

                        // Ngoại thất
                        denPhanhTrenCao: item.denPhanhTrenCao || "Đang cập nhật",
                        guongChieuHau: item.guongChieuHau || "Đang cập nhật",
                        sayGuongChieuHau: item.sayGuongChieuHau || "Đang cập nhật",
                        gatMuaTuDong: item.gatMuaTuDong || "Đang cập nhật",
                        denChieuXa: item.denChieuXa || "Đang cập nhật",
                        denChieuGan: item.denChieuGan || "Đang cập nhật",
                        denBanNgay: item.denBanNgay || "Đang cập nhật",
                        denPhaTuDongBat_Tat: item.denPhaTuDongBat_Tat || "Đang cập nhật",
                        denPhaTuDongXa_Gan: item.denPhaTuDongXa_Gan || "Đang cập nhật",
                        denPhaTuDongDieuChinhGocChieu: item.denPhaTuDongDieuChinhGocChieu || "Đang cập nhật",
                        denHau: item.denHau || "Đang cập nhật",
                        angTenVayCa: item.angTenVayCa || "Đang cập nhật",
                        copDong_MoDien: item.copDong_MoDien || "Đang cập nhật",
                        moCopRanhTay: item.moCopRanhTay || "Đang cập nhật",

                        // Nội thất
                        chatLieuBocGhe: item.chatLieuBocGhe || "Đang cập nhật",
                        dieuChinhGheLai: item.dieuChinhGheLai || "Đang cập nhật",
                        nhoViTriGheLai: item.nhoViTriGheLai || "Đang cập nhật",
                        massageGheLai: item.massageGheLai || "Đang cập nhật",
                        dieuChinhGhePhu: item.dieuChinhGhePhu || "Đang cập nhật",
                        massageGhePhu: item.massageGhePhu || "Đang cập nhật",
                        thongGioGheLai: item.thongGioGheLai || "Đang cập nhật",
                        thongGioGhePhu: item.thongGioGhePhu || "Đang cập nhật",
                        suoiAmGheLai: item.suoiAmGheLai || "Đang cập nhật",
                        suoiAmGhePhu: item.suoiAmGhePhu || "Đang cập nhật",
                        bangDongHoTaiXe: item.bangDongHoTaiXe || "Đang cập nhật",
                        nutBamTichHopTrenVolang: item.nutBamTichHopTrenVolang || "Đang cập nhật",
                        chatLieuBocVoLang: item.chatLieuBocVoLang || "Đang cập nhật",
                        chiaKhoaThongMinh: item.chiaKhoaThongMinh || "Đang cập nhật",
                        khoiDongNutBam: item.khoiDongNutBam || "Đang cập nhật",
                        dieuHoa: item.dieuHoa || "Đang cập nhật",
                        cuaGioHangGheSau: item.cuaGioHangGheSau || "Đang cập nhật",
                        cuaKinhMotCham: item.cuaKinhMotCham || "Đang cập nhật",
                        cuaSoTroi: item.cuaSoTroi || "Đang cập nhật",
                        cuaSoTroiToanCanh: item.cuaSoTroiToanCanh || "Đang cập nhật",
                        guongChieuHauTrongXeChongChoiTuDong: item.guongChieuHauTrongXeChongChoiTuDong || "Đang cập nhật",
                        tuaTayHangGheTruoc: item.tuaTayHangGheTruoc || "Đang cập nhật",
                        tuaTayHangGheSau: item.tuaTayHangGheSau || "Đang cập nhật",
                        manHinhGiaiTri: item.manHinhGiaiTri || "Đang cập nhật",
                        ketNoiAppleCarPlay: item.ketNoiAppleCarPlay || "Đang cập nhật",
                        ketNoiAndroidAuto: item.ketNoiAndroidAuto || "Đang cập nhật",
                        raLenhGiongNoi: item.raLenhGiongNoi || "Đang cập nhật",
                        damThoaiRanhTay: item.damThoaiRanhTay || "Đang cập nhật",
                        heThongLoa: item.heThongLoa || "Đang cập nhật",
                        phatWifi: item.phatWifi || "Đang cập nhật",
                        ketNoiAUX: item.ketNoiAUX || "Đang cập nhật",
                        ketNoiUSB: item.ketNoiUSB || "Đang cập nhật",
                        ketNoiBluetooth: item.ketNoiBluetooth || "Đang cập nhật",
                        radioAM_FM: item.radioAM_FM || "Đang cập nhật",
                        sacKhongDay: item.sacKhongDay || "Đang cập nhật",

                        // Hỗ trợ vận hành
                        troLucVoLang: item.troLucVoLang || "Đang cập nhật",
                        nhieuCheDoLai: item.nhieuCheDoLai || "Đang cập nhật",
                        layChuyenSoTrenVoLang: item.layChuyenSoTrenVoLang || "Đang cập nhật",
                        kiemSoatGiaToc: item.kiemSoatGiaToc || "Đang cập nhật",
                        phanhTayDienTu: item.phanhTayDienTu || "Đang cập nhật",
                        giuPhanhTuDong: item.giuPhanhTuDong || "Đang cập nhật",

                        // Công nghệ an toàn
                        kiemSoatHanhTrinh: item.kiemSoatHanhTrinh || "Đang cập nhật",
                        kiemSoatHanhTrinhThichUng: item.kiemSoatHanhTrinhThichUng || "Đang cập nhật",
                        canhBaoPhuongTienCatNgangKhiLui: item.canhBaoPhuongTienCatNgangKhiLui || "Đang cập nhật",
                        canhBaoTaiXeBuonNgu: item.canhBaoTaiXeBuonNgu || "Đang cập nhật",
                        mocGheAnToanChoTreEmIsofix: item.mocGheAnToanChoTreEmIsofix || "Đang cập nhật",
                        hoTroDoDeo: item.hoTroDoDeo || "Đang cập nhật",
                        canhBaoDiemMu: item.canhBaoDiemMu || "Đang cập nhật",
                        camBienLui: item.camBienLui || "Đang cập nhật",
                        cameraLui: item.cameraLui || "Đang cập nhật",
                        camera360: item.camera360 || "Đang cập nhật",
                        cameraQuanSatLanDuong: item.cameraQuanSatLanDuong || "Đang cập nhật",
                        canhBaoChechLanDuong: item.canhBaoChechLanDuong || "Đang cập nhật",
                        hoTroGiuLan: item.hoTroGiuLan || "Đang cập nhật",
                        hoTroPhanhTuDongGiamThieuVaCham: item.hoTroPhanhTuDongGiamThieuVaCham || "Đang cập nhật",
                        phanPhoiLucPhanhDienTu: item.phanPhoiLucPhanhDienTu || "Đang cập nhật",
                        canBangDienTu: item.canBangDienTu || "Đang cập nhật",
                        kiemSoatLucKeo: item.kiemSoatLucKeo || "Đang cập nhật",
                        hoTroKhoiHanhNgangDoc: item.hoTroKhoiHanhNgangDoc || "Đang cập nhật",
                        soTuiKhi: item.soTuiKhi || "Đang cập nhật",
                        chongBoCungPhanh: item.chongBoCungPhanh || "Đang cập nhật",
                        hoTroLucPhanhKhanCap: item.hoTroLucPhanhKhanCap || "Đang cập nhật",
                    }))
                );
            } catch (err) {
                console.error("JSON không hợp lệ:", err.message);
            }
        };
        reader.readAsText(file);
    }
};


  return (
    <Container className="mt-4">
      <div className="box-title">
        <h2>Thông số kỹ thuật xe</h2>
        <div>
          <Button
            className="btn btn-outline-success"
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Thêm xe từ file JSON
          </Button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography variant="h6" component="h2">
                Tải file JSON
              </Typography>
              <TextField
                type="file"
                inputProps={{ accept: "application/json" }}
                fullWidth
                onChange={handleFileUpload}
                sx={{ my: 2 }}
              />
              {jsonData.length > 0 && (
                <div>
                  <Typography variant="body1">Xem trước dữ liệu:</Typography>
                  <div
                    style={{
                      maxHeight: "200px", // Giới hạn chiều cao
                      overflowY: "auto", // Kích hoạt cuộn dọc
                      marginTop: "10px",
                      border: "1px solid #ccc", // Để phân biệt khu vực cuộn
                      padding: "5px",
                    }}
                  >
                    <ul>
                      {jsonData.map((car, index) => (
                        <li key={index}>
                          {car.brand} - {car.name} - {car.version}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={() => {
                  handleFileSubmit();
                  setOpen(false);
                }}
              >
                Xác nhận
              </Button>
            </Box>
          </Modal>
        </div>
      </div>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Tên xe"
            variant="outlined"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Hãng xe"
            variant="outlined"
            name="brand"
            fullWidth
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Phiên bản"
            variant="outlined"
            name="version"
            fullWidth
            value={formData.version}
            onChange={handleChange}
            required
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Select
            label="Phân khúc xe"
            name="vehicle_segment"
            fullWidth
            value={formData.vehicle_segment}
            onChange={handleChange}
            required
          >
            <MenuItem value="">
              <em>-- Chọn phân khúc xe --</em>
            </MenuItem>
            <MenuItem value="XeNhoCoA">Xe nhỏ cỡ A</MenuItem>
            <MenuItem value="XeNhoHangB">Xe nhỏ hạng B</MenuItem>
            <MenuItem value="XeNhoHangBPC">Xe nhỏ hạng B+/C-</MenuItem>
            <MenuItem value="XeCoVuaHangC">Xe cỡ vừa hạng C</MenuItem>
            <MenuItem value="XeCoTrungHangD">Xe cỡ trung hạng D</MenuItem>
            <MenuItem value="XeCoTrungHangE">Xe cỡ trung hạng E</MenuItem>
            <MenuItem value="BanTaiCoTrung">Bán tải cỡ trung</MenuItem>
            <MenuItem value="MPVCoNho">MPV cỡ nhỏ</MenuItem>
            <MenuItem value="MPVCoTrung">MPV cỡ trung</MenuItem>
            <MenuItem value="SUVPhoThongCoLon">SUV phổ thông cỡ lớn</MenuItem>
            <MenuItem value="XeNhoCoAPB">Xe nhỏ cỡ A+/B-</MenuItem>
            <MenuItem value="XeSieuNho">Xe siêu nhỏ</MenuItem>
            <MenuItem value="MPVCoLon">MPV cỡ lớn</MenuItem>
            <MenuItem value="XeSangCoNho">Xe sang cỡ nhỏ</MenuItem>
            <MenuItem value="XeSangCoTrung">Xe sang cỡ trung</MenuItem>
            <MenuItem value="XeSangCoLon">Xe sang cỡ lớn</MenuItem>
            <MenuItem value="MPVHangSang">MPV hạng sang</MenuItem>
            <MenuItem value="BanTaiCoLon">Bán tải cỡ lớn</MenuItem>
            <MenuItem value="SieuXeXeTheThao">Siêu xe/Xe thể thao</MenuItem>
            <MenuItem value="SieuSangCoLon">Siêu sang cỡ lớn</MenuItem>
          </Select>
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Giá"
            variant="outlined"
            name="price"
            fullWidth
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{ width: "100%" }}
          />
          <div
            style={{ display: "flex", marginTop: "10px", overflowX: "auto" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{ position: "relative", marginRight: "10px" }}
              >
                <img
                  src={image}
                  alt="preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <span
                  onClick={() => handleRemoveImage(index)}
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    cursor: "pointer",
                    color: "red",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "2px 5px",
                    fontWeight: "bold",
                  }}
                >
                  &times;
                </span>
              </div>
            ))}
          </div>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextareaAutosize
            aria-label="Mô tả"
            minRows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Nhập mô tả cho xe..."
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </Box>

        {/* Động cơ/Hộp số */}
        <Box sx={{ mb: 2, mt: 4, border: "1px solid #ccc", padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Thông số kỹ thuật - Động cơ/Hộp số
          </Typography>
          <TextField
            label="Kiểu động cơ"
            variant="outlined"
            name="kieuDongCo"
            fullWidth
            value={formData.kieuDongCo}
            onChange={handleChange}
          />
          <TextField
            label="Dung tích"
            variant="outlined"
            name="dungTich"
            fullWidth
            value={formData.dungTich}
            onChange={handleChange}
          />
          <TextField
            label="Công suất"
            variant="outlined"
            name="congSuat"
            fullWidth
            value={formData.congSuat}
            onChange={handleChange}
          />
          <TextField
            label="Mô-men xoắn"
            variant="outlined"
            name="momenXoan"
            fullWidth
            value={formData.momenXoan}
            onChange={handleChange}
          />
          <TextField
            label="Hộp số"
            variant="outlined"
            name="hopso"
            fullWidth
            value={formData.hopso}
            onChange={handleChange}
          />
          <TextField
            label="Hệ dẫn động"
            variant="outlined"
            name="heDanDong"
            fullWidth
            value={formData.heDanDong}
            onChange={handleChange}
          />
          <TextField
            label="Loại nhiên liệu"
            variant="outlined"
            name="loaiNhienLieu"
            fullWidth
            value={formData.loaiNhienLieu}
            onChange={handleChange}
          />
          <TextField
            label="Mức tiêu thụ nhiên liệu"
            variant="outlined"
            name="mucTieuThuNhienLieu"
            fullWidth
            value={formData.mucTieuThuNhienLieu}
            onChange={handleChange}
          />
        </Box>

        {/* Kích thước/Trọng lượng */}
        <Box sx={{ mb: 2, mt: 4, border: "1px solid #ccc", padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Thông số kỹ thuật - Kích thước/Trọng lượng
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                label="Số chỗ"
                variant="outlined"
                name="soCho"
                fullWidth
                value={formData.soCho}
                onChange={handleChange}
              />
              <TextField
                label="Kích thước"
                variant="outlined"
                name="kichThuoc"
                fullWidth
                value={formData.kichThuoc}
                onChange={handleChange}
              />
              <TextField
                label="Chiều dài cơ sở"
                variant="outlined"
                name="chieuDaiCoSo"
                fullWidth
                value={formData.chieuDaiCoSo}
                onChange={handleChange}
              />
              <TextField
                label="Khoảng sáng gầm"
                variant="outlined"
                name="khoangSangGam"
                fullWidth
                value={formData.khoangSangGam}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                label="Bán kính vòng quay"
                variant="outlined"
                name="banKinhVongQuay"
                fullWidth
                value={formData.banKinhVongQuay}
                onChange={handleChange}
              />
              <TextField
                label="Thể tích khoang hành lý"
                variant="outlined"
                name="theTichKhoangHanhLy"
                fullWidth
                value={formData.theTichKhoangHanhLy}
                onChange={handleChange}
              />
              <TextField
                label="Dung tích bình nhiên liệu"
                variant="outlined"
                name="dungTichBinhNhienLieu"
                fullWidth
                value={formData.dungTichBinhNhienLieu}
                onChange={handleChange}
              />
              <TextField
                label="Trọng lượng bản thân"
                variant="outlined"
                name="trongLuongBanThan"
                fullWidth
                value={formData.trongLuongBanThan}
                onChange={handleChange}
              />
              <TextField
                label="Trọng lượng toàn tải"
                variant="outlined"
                name="trongLuongToanTai"
                fullWidth
                value={formData.trongLuongToanTai}
                onChange={handleChange}
              />
              <TextField
                label="Lốp/lazang"
                variant="outlined"
                name="lop_lazang"
                fullWidth
                value={formData.lop_lazang}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Treo trước"
            variant="outlined"
            name="treoTruoc"
            fullWidth
            value={formData.treoTruoc}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.treoTruoc_checked}
                onChange={handleChange}
                name="treoTruoc_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Treo sau */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Treo sau"
            variant="outlined"
            name="treoSau"
            fullWidth
            value={formData.treoSau}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.treoSau_checked}
                onChange={handleChange}
                name="treoSau_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Phanh trước */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Phanh trước"
            variant="outlined"
            name="phanhTruoc"
            fullWidth
            value={formData.phanhTruoc}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.phanhTruoc_checked}
                onChange={handleChange}
                name="phanhTruoc_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Phanh sau */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Phanh sau"
            variant="outlined"
            name="phanhSau"
            fullWidth
            value={formData.phanhSau}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.phanhSau_checked}
                onChange={handleChange}
                name="phanhSau_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Đèn phanh trên cao"
            variant="outlined"
            name="denPhanhTrenCao"
            fullWidth
            value={formData.denPhanhTrenCao}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.denPhanhTrenCao_checked}
                onChange={handleChange}
                name="denPhanhTrenCao_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Gương chiếu hậu */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Gương chiếu hậu"
            variant="outlined"
            name="guongChieuHau"
            fullWidth
            value={formData.guongChieuHau}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.guongChieuHau_checked}
                onChange={handleChange}
                name="guongChieuHau_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Typography variant="h4" gutterBottom>
          Thông số kỹ thuật - Ngoại thất
        </Typography>
        {/* Sấy gương chiếu hậu */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Sấy gương chiếu hậu"
            variant="outlined"
            name="sayGuongChieuHau"
            fullWidth
            value={formData.sayGuongChieuHau}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.sayGuongChieuHau_checked}
                onChange={handleChange}
                name="sayGuongChieuHau_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Gạt mưa tự động */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Gạt mưa tự động"
            variant="outlined"
            name="gatMuaTuDong"
            fullWidth
            value={formData.gatMuaTuDong}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.gatMuaTuDong_checked}
                onChange={handleChange}
                name="gatMuaTuDong_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Đèn chiếu xa */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Đèn chiếu xa"
            variant="outlined"
            name="denChieuXa"
            fullWidth
            value={formData.denChieuXa}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.denChieuXa_checked}
                onChange={handleChange}
                name="denChieuXa_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Đèn chiếu gần */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Đèn chiếu gần"
            variant="outlined"
            name="denChieuGan"
            fullWidth
            value={formData.denChieuGan}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.denChieuGan_checked}
                onChange={handleChange}
                name="denChieuGan_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Đèn ban ngày */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Đèn ban ngày"
            variant="outlined"
            name="denBanNgay"
            fullWidth
            value={formData.denBanNgay}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.denBanNgay_checked}
                onChange={handleChange}
                name="denBanNgay_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Đèn pha tự động bật/tắt */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Đèn pha tự động bật/tắt"
            variant="outlined"
            name="denPhaTuDongBat_Tat"
            fullWidth
            value={formData.denPhaTuDongBat_Tat}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.denPhaTuDongBat_Tat_checked}
                onChange={handleChange}
                name="denPhaTuDongBat_Tat_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Đèn pha tự động xa/gần */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Đèn pha tự động xa/gần"
            variant="outlined"
            name="denPhaTuDongXa_Gan"
            fullWidth
            value={formData.denPhaTuDongXa_Gan}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.denPhaTuDongXa_Gan_checked}
                onChange={handleChange}
                name="denPhaTuDongXa_Gan_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Đèn pha tự động điều chỉnh góc chiếu */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Đèn pha tự động điều chỉnh góc chiếu"
            variant="outlined"
            name="denPhaTuDongDieuChinhGocChieu"
            fullWidth
            value={formData.denPhaTuDongDieuChinhGocChieu}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.denPhaTuDongDieuChinhGocChieu_checked}
                onChange={handleChange}
                name="denPhaTuDongDieuChinhGocChieu_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Đèn hậu */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Đèn hậu"
            variant="outlined"
            name="denHau"
            fullWidth
            value={formData.denHau}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.denHau_checked}
                onChange={handleChange}
                name="denHau_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Ăng-ten vây cá */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Ăng-ten vây cá"
            variant="outlined"
            name="angTenVayCa"
            fullWidth
            value={formData.angTenVayCa}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.angTenVayCa_checked}
                onChange={handleChange}
                name="angTenVayCa_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Cốp động/mở điện */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Cốp động/mở điện"
            variant="outlined"
            name="copDong_MoDien"
            fullWidth
            value={formData.copDong_MoDien}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.copDong_MoDien_checked}
                onChange={handleChange}
                name="copDong_MoDien_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Mở cốp rảnh tay */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Mở cốp rảnh tay"
            variant="outlined"
            name="moCopRanhTay"
            fullWidth
            value={formData.moCopRanhTay}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.moCopRanhTay_checked}
                onChange={handleChange}
                name="moCopRanhTay_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Typography variant="h4" gutterBottom>
          Thông số kỹ thuật - Nội thất
        </Typography>
        {/* Chất liệu bọc ghế */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Chất liệu bọc ghế"
            variant="outlined"
            name="chatLieuBocGhe"
            fullWidth
            value={formData.chatLieuBocGhe}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.chatLieuBocGhe_checked}
                onChange={handleChange}
                name="chatLieuBocGhe_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Điều chỉnh ghế lái */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Điều chỉnh ghế lái"
            variant="outlined"
            name="dieuChinhGheLai"
            fullWidth
            value={formData.dieuChinhGheLai}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.dieuChinhGheLai_checked}
                onChange={handleChange}
                name="dieuChinhGheLai_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Nhớ vị trí ghế lái */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Nhớ vị trí ghế lái"
            variant="outlined"
            name="nhoViTriGheLai"
            fullWidth
            value={formData.nhoViTriGheLai}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.nhoViTriGheLai_checked}
                onChange={handleChange}
                name="nhoViTriGheLai_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Massage ghế lái */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Massage ghế lái"
            variant="outlined"
            name="massageGheLai"
            fullWidth
            value={formData.massageGheLai}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.massageGheLai_checked}
                onChange={handleChange}
                name="massageGheLai_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Điều chỉnh ghế phụ */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Điều chỉnh ghế phụ"
            variant="outlined"
            name="dieuChinhGhePhu"
            fullWidth
            value={formData.dieuChinhGhePhu}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.dieuChinhGhePhu_checked}
                onChange={handleChange}
                name="dieuChinhGhePhu_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Massage ghế phụ */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Massage ghế phụ"
            variant="outlined"
            name="massageGhePhu"
            fullWidth
            value={formData.massageGhePhu}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.massageGhePhu_checked}
                onChange={handleChange}
                name="massageGhePhu_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Thông gió ghế lái */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Thông gió ghế lái"
            variant="outlined"
            name="thongGioGheLai"
            fullWidth
            value={formData.thongGioGheLai}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.thongGioGheLai_checked}
                onChange={handleChange}
                name="thongGioGheLai_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Thông gió ghế phụ */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Thông gió ghế phụ"
            variant="outlined"
            name="thongGioGhePhu"
            fullWidth
            value={formData.thongGioGhePhu}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.thongGioGhePhu_checked}
                onChange={handleChange}
                name="thongGioGhePhu_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Sưởi ấm ghế lái */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Sưởi ấm ghế lái"
            variant="outlined"
            name="suoiAmGheLai"
            fullWidth
            value={formData.suoiAmGheLai}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.suoiAmGheLai_checked}
                onChange={handleChange}
                name="suoiAmGheLai_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Sưởi ấm ghế phụ */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Sưởi ấm ghế phụ"
            variant="outlined"
            name="suoiAmGhePhu"
            fullWidth
            value={formData.suoiAmGhePhu}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.suoiAmGhePhu_checked}
                onChange={handleChange}
                name="suoiAmGhePhu_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Bảng đồng hồ tài xế */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Bảng đồng hồ tài xế"
            variant="outlined"
            name="bangDongHoTaiXe"
            fullWidth
            value={formData.bangDongHoTaiXe}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.bangDongHoTaiXe_checked}
                onChange={handleChange}
                name="bangDongHoTaiXe_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Nút bấm tích hợp trên vô lăng */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Nút bấm tích hợp trên vô lăng"
            variant="outlined"
            name="nutBamTichHopTrenVolang"
            fullWidth
            value={formData.nutBamTichHopTrenVolang}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.nutBamTichHopTrenVolang_checked}
                onChange={handleChange}
                name="nutBamTichHopTrenVolang_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Chất liệu bọc vô lăng */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Chất liệu bọc vô lăng"
            variant="outlined"
            name="chatLieuBocVoLang"
            fullWidth
            value={formData.chatLieuBocVoLang}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.chatLieuBocVoLang_checked}
                onChange={handleChange}
                name="chatLieuBocVoLang_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Chìa khóa thông minh */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Chìa khóa thông minh"
            variant="outlined"
            name="chiaKhoaThongMinh"
            fullWidth
            value={formData.chiaKhoaThongMinh}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.chiaKhoaThongMinh_checked}
                onChange={handleChange}
                name="chiaKhoaThongMinh_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Khởi động nút bấm */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Khởi động nút bấm"
            variant="outlined"
            name="khoiDongNutBam"
            fullWidth
            value={formData.khoiDongNutBam}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.khoiDongNutBam_checked}
                onChange={handleChange}
                name="khoiDongNutBam_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Điều hòa */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Điều hòa"
            variant="outlined"
            name="dieuHoa"
            fullWidth
            value={formData.dieuHoa}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.dieuHoa_checked}
                onChange={handleChange}
                name="dieuHoa_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Cửa gió hạng ghế sau */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Cửa gió hàng ghế sau"
            variant="outlined"
            name="cuaGioHangGheSau"
            fullWidth
            value={formData.cuaGioHangGheSau}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.cuaGioHangGheSau_checked}
                onChange={handleChange}
                name="cuaGioHangGheSau_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Cửa kính một chạm */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Cửa kính một chạm"
            variant="outlined"
            name="cuaKinhMotCham"
            fullWidth
            value={formData.cuaKinhMotCham}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.cuaKinhMotCham_checked}
                onChange={handleChange}
                name="cuaKinhMotCham_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Cửa sổ trời */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Cửa sổ trời"
            variant="outlined"
            name="cuaSoTroi"
            fullWidth
            value={formData.cuaSoTroi}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.cuaSoTroi_checked}
                onChange={handleChange}
                name="cuaSoTroi_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Cửa sổ trời toàn cảnh */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Cửa sổ trời toàn cảnh"
            variant="outlined"
            name="cuaSoTroiToanCanh"
            fullWidth
            value={formData.cuaSoTroiToanCanh}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.cuaSoTroiToanCanh_checked}
                onChange={handleChange}
                name="cuaSoTroiToanCanh_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Gương chiếu hậu trong xe chống chói tự động */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Gương chiếu hậu trong xe chống chói tự động"
            variant="outlined"
            name="guongChieuHauTrongXeChongChoiTuDong"
            fullWidth
            value={formData.guongChieuHauTrongXeChongChoiTuDong}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.guongChieuHauTrongXeChongChoiTuDong_checked}
                onChange={handleChange}
                name="guongChieuHauTrongXeChongChoiTuDong_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Tựa tay hàng ghế trước */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Tựa tay hàng ghế trước"
            variant="outlined"
            name="tuaTayHangGheTruoc"
            fullWidth
            value={formData.tuaTayHangGheTruoc}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.tuaTayHangGheTruoc_checked}
                onChange={handleChange}
                name="tuaTayHangGheTruoc_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Tựa tay hàng ghế sau */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Tựa tay hàng ghế sau"
            variant="outlined"
            name="tuaTayHangGheSau"
            fullWidth
            value={formData.tuaTayHangGheSau}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.tuaTayHangGheSau_checked}
                onChange={handleChange}
                name="tuaTayHangGheSau_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Màn hình giải trí */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Màn hình giải trí"
            variant="outlined"
            name="manHinhGiaiTri"
            fullWidth
            value={formData.manHinhGiaiTri}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.manHinhGiaiTri_checked}
                onChange={handleChange}
                name="manHinhGiaiTri_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Kết nối Apple CarPlay */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Kết nối Apple CarPlay"
            variant="outlined"
            name="ketNoiAppleCarPlay"
            fullWidth
            value={formData.ketNoiAppleCarPlay}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.ketNoiAppleCarPlay_checked}
                onChange={handleChange}
                name="ketNoiAppleCarPlay_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Kết nối Android Auto */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Kết nối Android Auto"
            variant="outlined"
            name="ketNoiAndroidAuto"
            fullWidth
            value={formData.ketNoiAndroidAuto}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.ketNoiAndroidAuto_checked}
                onChange={handleChange}
                name="ketNoiAndroidAuto_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Ra lệnh giọng nói */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Ra lệnh giọng nói"
            variant="outlined"
            name="raLenhGiongNoi"
            fullWidth
            value={formData.raLenhGiongNoi}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.raLenhGiongNoi_checked}
                onChange={handleChange}
                name="raLenhGiongNoi_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Đàm thoại rảnh tay */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Đàm thoại rảnh tay"
            variant="outlined"
            name="damThoaiRanhTay"
            fullWidth
            value={formData.damThoaiRanhTay}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.damThoaiRanhTay_checked}
                onChange={handleChange}
                name="damThoaiRanhTay_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Hệ thống loa */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Hệ thống loa"
            variant="outlined"
            name="heThongLoa"
            fullWidth
            value={formData.heThongLoa}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.heThongLoa_checked}
                onChange={handleChange}
                name="heThongLoa_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Phát Wifi */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Phát Wifi"
            variant="outlined"
            name="phatWifi"
            fullWidth
            value={formData.phatWifi}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.phatWifi_checked}
                onChange={handleChange}
                name="phatWifi_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Kết nối AUX */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Kết nối AUX"
            variant="outlined"
            name="ketNoiAUX"
            fullWidth
            value={formData.ketNoiAUX}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.ketNoiAUX_checked}
                onChange={handleChange}
                name="ketNoiAUX_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Kết nối USB */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Kết nối USB"
            variant="outlined"
            name="ketNoiUSB"
            fullWidth
            value={formData.ketNoiUSB}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.ketNoiUSB_checked}
                onChange={handleChange}
                name="ketNoiUSB_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Kết nối Bluetooth */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Kết nối Bluetooth"
            variant="outlined"
            name="ketNoiBluetooth"
            fullWidth
            value={formData.ketNoiBluetooth}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.ketNoiBluetooth_checked}
                onChange={handleChange}
                name="ketNoiBluetooth_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Radio AM/FM */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Radio AM/FM"
            variant="outlined"
            name="radioAM_FM"
            fullWidth
            value={formData.radioAM_FM}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.radioAM_FM_checked}
                onChange={handleChange}
                name="radioAM_FM_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Sạc không dây */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Sạc không dây"
            variant="outlined"
            name="sacKhongDay"
            fullWidth
            value={formData.sacKhongDay}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.sacKhongDay_checked}
                onChange={handleChange}
                name="sacKhongDay_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Typography variant="h4" gutterBottom>
          Thông số kỹ thuật - Hỗ trợ vận hành
        </Typography>
        {/* Trợ lực vô lăng */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Trợ lực vô lăng"
            variant="outlined"
            name="troLucVoLang"
            fullWidth
            value={formData.troLucVoLang}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.troLucVoLang_checked}
                onChange={handleChange}
                name="troLucVoLang_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Nhiều chế độ lái */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Nhiều chế độ lái"
            variant="outlined"
            name="nhieuCheDoLai"
            fullWidth
            value={formData.nhieuCheDoLai}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.nhieuCheDoLai_checked}
                onChange={handleChange}
                name="nhieuCheDoLai_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Lẫy chuyển số trên vô lăng */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Lẫy chuyển số trên vô lăng"
            variant="outlined"
            name="layChuyenSoTrenVoLang"
            fullWidth
            value={formData.layChuyenSoTrenVoLang}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.layChuyenSoTrenVoLang_checked}
                onChange={handleChange}
                name="layChuyenSoTrenVoLang_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Kiểm soát gia tốc */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Kiểm soát gia tốc"
            variant="outlined"
            name="kiemSoatGiaToc"
            fullWidth
            value={formData.kiemSoatGiaToc}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.kiemSoatGiaToc_checked}
                onChange={handleChange}
                name="kiemSoatGiaToc_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Phanh tay điện tử */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Phanh tay điện tử"
            variant="outlined"
            name="phanhTayDienTu"
            fullWidth
            value={formData.phanhTayDienTu}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.phanhTayDienTu_checked}
                onChange={handleChange}
                name="phanhTayDienTu_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Giữ phanh tự động */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Giữ phanh tự động"
            variant="outlined"
            name="giuPhanhTuDong"
            fullWidth
            value={formData.giuPhanhTuDong}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.giuPhanhTuDong_checked}
                onChange={handleChange}
                name="giuPhanhTuDong_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Typography variant="h4" gutterBottom>
          Thông số kỹ thuật - Công nghệ an toàn
        </Typography>
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Kiểm soát hành trình"
            variant="outlined"
            name="kiemSoatHanhTrinh"
            fullWidth
            value={formData.kiemSoatHanhTrinh}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.kiemSoatHanhTrinh_checked}
                onChange={handleChange}
                name="kiemSoatHanhTrinh_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Kiểm soát hành trình thích ứng"
            variant="outlined"
            name="kiemSoatHanhTrinhThichUng"
            fullWidth
            value={formData.kiemSoatHanhTrinhThichUng}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.kiemSoatHanhTrinhThichUng_checked}
                onChange={handleChange}
                name="kiemSoatHanhTrinhThichUng_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Cảnh báo phương tiện cắt ngang khi lùi"
            variant="outlined"
            name="canhBaoPhuongTienCatNgangKhiLui"
            fullWidth
            value={formData.canhBaoPhuongTienCatNgangKhiLui}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.canhBaoPhuongTienCatNgangKhiLui_checked}
                onChange={handleChange}
                name="canhBaoPhuongTienCatNgangKhiLui_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Cảnh báo tài xế buồn ngủ"
            variant="outlined"
            name="canhBaoTaiXeBuonNgu"
            fullWidth
            value={formData.canhBaoTaiXeBuonNgu}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.canhBaoTaiXeBuonNgu_checked}
                onChange={handleChange}
                name="canhBaoTaiXeBuonNgu_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Ghế an toàn cho trẻ em Isofix"
            variant="outlined"
            name="mocGheAnToanChoTreEmIsofix"
            fullWidth
            value={formData.mocGheAnToanChoTreEmIsofix}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.mocGheAnToanChoTreEmIsofix_checked}
                onChange={handleChange}
                name="mocGheAnToanChoTreEmIsofix_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Hỗ trợ đổ đèo"
            variant="outlined"
            name="hoTroDoDeo"
            fullWidth
            value={formData.hoTroDoDeo}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.hoTroDoDeo_checked}
                onChange={handleChange}
                name="hoTroDoDeo_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Cảnh báo điểm mù"
            variant="outlined"
            name="canhBaoDiemMu"
            fullWidth
            value={formData.canhBaoDiemMu}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.canhBaoDiemMu_checked}
                onChange={handleChange}
                name="canhBaoDiemMu_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Camera lùi"
            variant="outlined"
            name="cameraLui"
            fullWidth
            value={formData.cameraLui}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.cameraLui_checked}
                onChange={handleChange}
                name="cameraLui_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Camera 360"
            variant="outlined"
            name="camera360"
            fullWidth
            value={formData.camera360}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.camera360_checked}
                onChange={handleChange}
                name="camera360_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Camera quan sát làn đường"
            variant="outlined"
            name="cameraQuanSatLanDuong"
            fullWidth
            value={formData.cameraQuanSatLanDuong}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.cameraQuanSatLanDuong_checked}
                onChange={handleChange}
                name="cameraQuanSatLanDuong_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Cảnh báo lệch làn đường"
            variant="outlined"
            name="canhBaoChechLanDuong"
            fullWidth
            value={formData.canhBaoChechLanDuong}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.canhBaoChechLanDuong_checked}
                onChange={handleChange}
                name="canhBaoChechLanDuong_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Hỗ trợ giữ làn"
            variant="outlined"
            name="hoTroGiuLan"
            fullWidth
            value={formData.hoTroGiuLan}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.hoTroGiuLan_checked}
                onChange={handleChange}
                name="hoTroGiuLan_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Hỗ trợ phanh tự động giảm thiểu va chạm"
            variant="outlined"
            name="hoTroPhanhTuDongGiamThieuVaCham"
            fullWidth
            value={formData.hoTroPhanhTuDongGiamThieuVaCham}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.hoTroPhanhTuDongGiamThieuVaCham_checked}
                onChange={handleChange}
                name="hoTroPhanhTuDongGiamThieuVaCham_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Phân phối lực phanh điện tử"
            variant="outlined"
            name="phanPhoiLucPhanhDienTu"
            fullWidth
            value={formData.phanPhoiLucPhanhDienTu}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.phanPhoiLucPhanhDienTu_checked}
                onChange={handleChange}
                name="phanPhoiLucPhanhDienTu_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Cân bằng điện tử"
            variant="outlined"
            name="canBangDienTu"
            fullWidth
            value={formData.canBangDienTu}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.canBangDienTu_checked}
                onChange={handleChange}
                name="canBangDienTu_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Kiểm soát lực kéo"
            variant="outlined"
            name="kiemSoatLucKeo"
            fullWidth
            value={formData.kiemSoatLucKeo}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.kiemSoatLucKeo_checked}
                onChange={handleChange}
                name="kiemSoatLucKeo_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Hỗ trợ khởi hành ngang dốc"
            variant="outlined"
            name="hoTroKhoiHanhNgangDoc"
            fullWidth
            value={formData.hoTroKhoiHanhNgangDoc}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.hoTroKhoiHanhNgangDoc_checked}
                onChange={handleChange}
                name="hoTroKhoiHanhNgangDoc_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Số túi khí */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Số túi khí"
            variant="outlined"
            name="soTuiKhi"
            fullWidth
            value={formData.soTuiKhi}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.soTuiKhi_checked}
                onChange={handleChange}
                name="soTuiKhi_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Chống bó cứng phanh */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Chống bó cứng phanh"
            variant="outlined"
            name="chongBoCungPhanh"
            fullWidth
            value={formData.chongBoCungPhanh}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.chongBoCungPhanh_checked}
                onChange={handleChange}
                name="chongBoCungPhanh_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        {/* Hỗ trợ lực phanh khẩn cấp */}
        <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Hỗ trợ lực phanh khẩn cấp"
            variant="outlined"
            name="hoTroLucPhanhKhanCap"
            fullWidth
            value={formData.hoTroLucPhanhKhanCap}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.hoTroLucPhanhKhanCap_checked}
                onChange={handleChange}
                name="hoTroLucPhanhKhanCap_checked"
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }} // Margin to the left
          />
        </Box>

        <Button type="submit" variant="contained" color="primary">
          Thêm mới
        </Button>
      </form>
    </Container>
  );
};

export default CarDetails;
