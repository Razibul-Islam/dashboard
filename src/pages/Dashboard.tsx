import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Compass, LayoutDashboard, Store, User, Users } from "lucide-react";
import React from "react";
import logo from "@/assets/logo.png";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  MenuItemStyles,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },

    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };
  return (
    <div>
      <Sidebar
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        breakPoint="md"
        className="h-screen bg-white"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            background: "#fff",
          }}
        >
          <div className="mb-6 mt-4">
            <img src={logo} className="w-36 h-20 object-contain ml-20" />
          </div>

          <div style={{ flex: 1 }}>
            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<LayoutDashboard className="scale-75" />}>
                <Link
                  to="/dashboard"
                  onClick={() => setToggled(!toggled)}
                  className="w-full h-full block"
                >
                  Dashboard
                </Link>
              </MenuItem>
              <SubMenu label="Product" icon={<Store className="scale-75" />}>
                <MenuItem>
                  <Link
                    to="/dashboard/allProduct"
                    onClick={() => setToggled(!toggled)}
                    className="w-full h-full block"
                  >
                    All Products
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/dashboard/offer-Product"
                    onClick={() => setToggled(!toggled)}
                    className="w-full h-full block"
                  >
                    Offer Products
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/dashboard/createProduct"
                    onClick={() => setToggled(!toggled)}
                    className="w-full h-full block"
                  >
                    Create Products
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/dashboard/createCategory"
                    onClick={() => setToggled(!toggled)}
                    className="w-full h-full block"
                  >
                    Create Category
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/dashboard/createBrand"
                    onClick={() => setToggled(!toggled)}
                    className="w-full h-full block"
                  >
                    Create Brand
                  </Link>
                </MenuItem>
              </SubMenu>
              <MenuItem icon={<Users className="scale-75" />}>
                <Link
                  to="/dashboard/customer"
                  onClick={() => setToggled(!toggled)}
                  className="w-full h-full block"
                >
                  Customers
                </Link>
              </MenuItem>
              <MenuItem icon={<Compass className="scale-75" />}>
                <Link
                  to="/dashboard/order"
                  onClick={() => setToggled(!toggled)}
                  className="w-full h-full block"
                >
                  Orders
                </Link>
              </MenuItem>
              <MenuItem icon={<User className="scale-75" />}>
                <Link
                  to="/dashboard/stuff"
                  onClick={() => setToggled(!toggled)}
                  className="w-full h-full block"
                >
                  Our stuff
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Sidebar>
      <main>
        <div
          style={{
            padding: "16px 24px 0 24px",
            color: "#44596e",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            {broken && (
              <button
                className="sb-button"
                onClick={() => setToggled(!toggled)}
              >
                <HamburgerMenuIcon className="scale-150" />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
