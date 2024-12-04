import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  CircularProgress,
  Alert,
  Grid,
  Paper,
} from "@mui/material";
import {
  BarChart,
  Legend,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  ScatterChart,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as BubbleTooltip,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import {
  fetchCarCountBySegment,
  fetchPopularCars,
  fetchmucTieuThuNhienLieu,
} from "../api/carApi";

const colors = ["#FF6F61", "#4CAF50", "#2196F3", "#FFEB3B", "#9C27B0"];

const Dashboard = () => {
  const [carData, setCarData] = useState([]);
  const [popularCars, setPopularCars] = useState([]);
  const [mucTieuThuNhienLieuData, setmucTieuThuNhienLieuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [segmentData, popularData] = await Promise.all([
          fetchCarCountBySegment(),
          fetchPopularCars(),
        ]);
        setCarData(segmentData);
        setPopularCars(popularData);
      } catch (error) {
        setError("Không thể tải dữ liệu.");
      } finally {
        setLoading(false);
      }
    };
    const loadmucTieuThuNhienLieu = async () => {
      try {
        const mucTieuThuNhienLieuData = await fetchmucTieuThuNhienLieu();
        setmucTieuThuNhienLieuData(mucTieuThuNhienLieuData); // Lưu dữ liệu vào state
      } catch (error) {
        setError("Không thể tải dữ liệu mức tiêu thụ nhiên liệu.");
      } finally {
        setLoading(false); // Tắt trạng thái loading
      }
    };
    loadmucTieuThuNhienLieu();
    loadData();
  }, []);

  const totalCarCount = carData.reduce(
    (sum, segment) => sum + segment.count,
    0
  );

  const calculateBubbleSize = (count) => {
    return Math.sqrt(count) * 10; // Tăng kích thước bong bóng theo căn bậc hai của số lượng
  };


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#F9F9F9', padding: '5px', border: '1px solid #ccc' }}>
          <p className="label">{`${label}`}</p>
          <p style={{ color: '#00B1F7'}} className="intro">{`Mức tiêu thụ: ${payload[0].value}L`}</p>
        </div>
      );
    }
  
    return null;
  };
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Container style={styles.root}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", marginBottom: "30px" }}
      >
        Car Management Dashboard
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        Tổng số xe: <strong style={{ color: "red" }}>{totalCarCount}</strong>
      </Typography>

      <Grid container spacing={4}>
        {/* Bubble Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ ...styles.paper }}>
            <Typography variant="h6" sx={{ ...styles.chartTitle }}>
              <strong>Số lượng xe theo phân khúc (Bubble Chart)</strong>
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  type="category"
                  dataKey="vehicle_segment"
                  name="Phân khúc"
                />
                <YAxis type="number" dataKey="count" name="Số lượng xe" />
                <BubbleTooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  formatter={(value, name, props) =>
                    `${props.payload.vehicle_segment}: ${value} xe`
                  }
                />
                <Scatter
                  name="Xe"
                  data={carData.map((d, i) => ({
                    ...d,
                    size: calculateBubbleSize(d.count),
                    fill: colors[i % colors.length],
                  }))}
                  dataKey="count"
                  shape="circle"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ ...styles.paper }}>
            <Typography variant="h6" sx={{ ...styles.chartTitle }}>
              <strong>Biểu đồ đường - Số lượng xe theo phân khúc</strong>
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={carData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="vehicle_segment" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        {/* Line Chart and Popular Cars on the same row */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ ...styles.paper }}>
            <Typography variant="h6" sx={{ ...styles.chartTitle }}>
              <strong>Xu hướng xe phổ biến</strong>
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={popularCars}>
                <defs>
                  <linearGradient
                    id="colorUv"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#81C784" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="clickCount" // Dữ liệu bạn muốn vẽ
                  stroke="#4CAF50"
                  fill="url(#colorUv)" // Sử dụng gradient
                  activeDot={{ r: 8 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ ...styles.paper }}>
            <Typography variant="h6" sx={{ ...styles.chartTitle }}>
              <strong>Danh sách xe phổ biến</strong>
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {popularCars.map((car) => {
                // Tìm số lượt click cao nhất
                const maxClicks = Math.max(
                  ...popularCars.map((car) => car.clickCount)
                );
                // Tính tỷ lệ phần trăm độ nổi tiếng của xe hiện tại
                const popularityPercent = (car.clickCount / maxClicks) * 100;

                return (
                  <li
                    key={car._id}
                    style={{
                      display: "flex",
                      marginBottom: "15px",
                      alignItems: "center",
                      background: "#f9f9f9",
                      padding: "10px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      src={car.imageUrl[0]}
                      alt={car.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginRight: "15px",
                      }}
                    />
                    <div>
                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: "bold" }}
                      >
                        {car.name} - {car.version}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Giá: {car.price.toLocaleString()} VNĐ
                      </Typography>
                      {/* Tiêu đề cho thanh tiến trình */}
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        style={{ marginTop: "5px" }}
                      >
                        Độ nổi tiếng: {Math.round(popularityPercent)}%
                      </Typography>
                      {/* Thanh tiến trình mô phỏng độ nổi tiếng */}
                      <div
                        style={{
                          width: "100%",
                          height: "8px",
                          background: "#e0e0e0",
                          borderRadius: "4px",
                          marginTop: "5px",
                        }}
                      >
                        <div
                          style={{
                            width: `${popularityPercent}%`,
                            height: "100%",
                            background: "#4CAF50",
                            borderRadius: "4px",
                          }}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ ...styles.paper }}>
            <Typography variant="h6" sx={{ ...styles.chartTitle }}>
              <strong>Mức tiêu thụ nhiên liệu</strong>
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={mucTieuThuNhienLieuData
                  .filter(
                    (item) =>
                      item.mucTieuThuNhienLieu != null &&
                      item.mucTieuThuNhienLieu !== ""
                  )
                  .map((item) => ({
                    ...item,
                    mucTieuThuNhienLieu:
                      typeof item.mucTieuThuNhienLieu === "string"
                        ? parseFloat(item.mucTieuThuNhienLieu.replace(",", "."))
                        : item.mucTieuThuNhienLieu,
                  }))
                  .sort((a, b) => a.mucTieuThuNhienLieu - b.mucTieuThuNhienLieu)
                  .slice(0, 10)}
              >
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#00B1F7" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#00B1F7" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="mucTieuThuNhienLieu"
                  stroke="#00B1F7"
                  fill="url(#colorGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const styles = {
  root: {
    fontFamily: "'Roboto', sans-serif",
    background: "linear-gradient(to bottom right, #f5f7fa, #c3d9f2)",
    minHeight: "100vh",
    padding: "30px",
  },
  paper: {
    borderRadius: "15px",
    padding: "20px",
    background: "white",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  },
  chartTitle: {
    textAlign: "center",
    color: "#333",
    marginBottom: "15px",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
};

export default Dashboard;
