import React, { useEffect, useState } from "react";
import { fetchCarCountBySegment } from "../api/carApi";
import { Container, Typography, Box, Paper, Grid, CircularProgress, Alert } from "@mui/material";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip as RadarTooltip,
  ResponsiveContainer as RadarResponsiveContainer,
} from "recharts";

// Màu sắc cho các cột
const barColors = ["#FF6F61", "#4CAF50", "#2196F3", "#FFEB3B", "#9C27B0"];

const Dashboard = () => {
  const [carCountBySegment, setCarCountBySegment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCarCountBySegment(); // Gọi hàm API
        setCarCountBySegment(data); // Lưu dữ liệu vào state
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

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

  // Dữ liệu cho biểu đồ radar
  const radarData = [
    { subject: "SUV", A: 120, fullMark: 150 },
    { subject: "Sedan", A: 98, fullMark: 150 },
    { subject: "Hatchback", A: 86, fullMark: 150 },
    { subject: "Truck", A: 105, fullMark: 150 },
    { subject: "Convertible", A: 115, fullMark: 150 },
    { subject: "Coupe", A: 130, fullMark: 150 },  // Thêm phân khúc mới
    { subject: "Minivan", A: 110, fullMark: 150 }, // Thêm phân khúc mới
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to the enhanced Car Management Dashboard!
      </Typography>

      {/* Sử dụng Grid để chia không gian cho các biểu đồ */}
      <Grid container spacing={4}>
        {/* Biểu đồ cột */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Số lượng xe theo phân khúc</Typography>
          <Paper sx={{ padding: 2 }}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={carCountBySegment}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="vehicle_segment" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "#fff",
                    borderRadius: "5px",
                    padding: "10px",
                    fontSize: "14px",
                  }}
                />
                <Legend verticalAlign="top" align="right" height={36} />
                <Bar dataKey="count">
                  {carCountBySegment.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Biểu đồ radar */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>So sánh các phân khúc xe</Typography>
          <Paper sx={{ padding: 2 }}>
            <RadarResponsiveContainer width="100%" height={300}>
              <RadarChart outerRadius="80%" width={730} height={250} data={radarData}>
                <PolarGrid stroke="#ccc" />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar
                  name="Car Segment"
                  dataKey="A"
                  stroke="#FF6F61"
                  fill="#FF6F61"
                  fillOpacity={0.6}
                />
                <RadarTooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "#fff",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                />
              </RadarChart>
            </RadarResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
