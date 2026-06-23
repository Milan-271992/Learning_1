import React, { useEffect, useState, Suspense } from "react";
import { Layout, ConfigProvider, theme } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Sidebar from "./components/Sidebar";
import FooterComponent from "./components/FooterComponent";
import axios from "axios";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7016/api/Menu/GetAllMenus").then((res) => {
      if (res.data.isSuccess) {
        setMenuData(res.data.data);
      }
    });
  }, []);

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <ConfigProvider theme={{ token: { colorBgContainer, borderRadiusLG, fontFamily: "Poppins" } }}>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <HeaderComponent />
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} menuData={menuData} />
          <Layout>
            <div style={{ minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG, margin: "20px" }}>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  {menuData.map(({ url, pagePath }, index) => {
                    const LazyComponent = React.lazy(() => import(`${pagePath}`));
                    return <Route key={index} path={url} element={<LazyComponent />} />;
                  })}
                </Routes>
              </Suspense>
            </div>
            <FooterComponent />
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
