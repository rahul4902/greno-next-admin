'useClient'
import { Dropdown, Image } from "react-bootstrap";
import { logout, toggleLoginModal } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export default function ProfileDropDown() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully.");
    router.push('/');
    dispatch(toggleLoginModal(false));
  };
  const handleLogin = () => {
    dispatch(toggleLoginModal(true));
  };
  
  return (
    <section className="bg-gray-2 py-20 dark:bg-dark">
      <div className="container">
        <div className="flex justify-center">
          <div className="relative inline-block">
            <Dropdown>
              <Dropdown.Toggle
                as="div"
                variant="link"
                id="dropdown-basic"
                className="d-flex align-items-center text-left border-0 bg-transparent shadow-none p-0"
              >
                <div
                  className="position-relative"
                  style={{ width: 32, height: 32 }}
                >
                  {isLoggedIn ? (
                    <Image
                      alt="avatar"
                      src="/images/common/user1.png"
                      fluid={true}
                    />
                  ) : (
                    <>
                      <Image
                        alt="avatar"
                        src="/images/common/user1.png"
                        fluid={true}
                      />
                    </>
                  )}
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="shadow border-0 rounded dark:bg-dark-2"
                align="end"
              >
                {isLoggedIn ? (
                  <>
                    <Dropdown.Item
                      href="javascript:void(0)"
                      className="dark:text-dark-6 dark:hover:bg-dark-3"
                    >
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="javascript:void(0)"
                      className="dark:text-dark-6 dark:hover:bg-dark-3"
                    >
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="javascript:void(0)"
                      className="dark:text-dark-6 dark:hover:bg-dark-3"
                      onClick={handleLogout}
                    >
                      Sign Out
                    </Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Item
                      className="dark:text-dark-6 dark:hover:bg-dark-3"
                      onClick={handleLogin}
                    >
                      Login
                    </Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </section>
  );
}
