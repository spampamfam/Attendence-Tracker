import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import logo from "/icons/logo.svg";
import background from "/image/background.jpg";

function Landing() {
  return (
    <>
      <div className="background">
        <div className="overlay">
          <nav className="absolute top-0 p-5 flex justify-between">
            <div className="flex gap-2">
              <img src={logo} alt="Logo" className="w-10 h-10" />
              <h1 className="text-2xl mt-1">Attendance Tracker</h1>
            </div>
            <div className="flex gap-12">
              <Stack spacing={2} direction="row">
                <Button variant="outlined" sx={{ background_color: "#7fa5f9" }}>
                  about us
                </Button>
                <Button variant="outlined" sx={{ background_color: "#7fa5f9" }}>
                  Pricing
                </Button>
                <Button variant="outlined" sx={{ background_color: "#7fa5f9" }}>
                  Contact Us
                </Button>
              </Stack>
            </div>
            <div className="flex gap-4">
              <button>Login</button>
              <button>Sign Up</button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Landing;
