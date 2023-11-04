import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "../header";
const Layout = ({ children }) => {
    return (_jsxs("div", { children: [_jsx(Header, {}), children] }));
};
export default Layout;
