import * as React from 'react';

import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';









function Signup() {

    const theme = useTheme();
  return (
    <AppProvider theme={theme}>

<div id="root">
            <div class="MuiBox-root css-ay5mhz">
              <main class="MuiContainer-root MuiContainer-maxWidthXs css-mzavur-MuiContainer-root">
                <div class="MuiBox-root css-bfm88r">
                  <h5 class="MuiTypography-root MuiTypography-h5 css-8tcpqu-MuiTypography-root">
                    Sign Up
                  </h5>
                  <p class="MuiTypography-root MuiTypography-body2 MuiTypography-gutterBottom css-12brfqg-MuiTypography-root">
                    Please create an account
                  </p>
                  <div class="MuiBox-root css-1dovkig">
                    <div class="MuiStack-root css-jfdv4h-MuiStack-root"></div>
                    <form class="MuiBox-root css-0">
                      <div class="MuiStack-root css-1saxivv-MuiStack-root">
                        <div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-cmpglg-MuiFormControl-root-MuiTextField-root">
                          <label
                            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-10q9uc-MuiFormLabel-root-MuiInputLabel-root"
                            data-shrink="false"
                            for="email"
                            id="email-label"
                          >
                            Email
                            <span
                              aria-hidden="true"
                              class="MuiFormLabel-asterisk MuiInputLabel-asterisk css-1ljffdk-MuiFormLabel-asterisk"
                            >
                               *
                            </span>
                          </label>
                          <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1blp12k-MuiInputBase-root-MuiOutlinedInput-root">
                            <input
                              aria-invalid="false"
                              autocomplete="email"
                              id="email"
                              placeholder="your@email.com"
                              required=""
                              class="MuiInputBase-input MuiOutlinedInput-input css-156u99p-MuiInputBase-input-MuiOutlinedInput-input"
                              type="email"
                              name="email"
                            />
                            <fieldset
                              aria-hidden="true"
                              class="MuiOutlinedInput-notchedOutline css-1ll44ll-MuiOutlinedInput-notchedOutline"
                            >
                              <legend class="css-81qg8w">
                                <span>Email *</span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                        <div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-cmpglg-MuiFormControl-root-MuiTextField-root">
                          <label
                            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-10q9uc-MuiFormLabel-root-MuiInputLabel-root"
                            data-shrink="false"
                            for="password"
                            id="password-label"
                          >
                            Password
                            <span
                              aria-hidden="true"
                              class="MuiFormLabel-asterisk MuiInputLabel-asterisk css-1ljffdk-MuiFormLabel-asterisk"
                            >
                               *
                            </span>
                          </label>
                          <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1blp12k-MuiInputBase-root-MuiOutlinedInput-root">
                            <input
                              aria-invalid="false"
                              autocomplete="current-password"
                              id="password"
                              placeholder="*****"
                              required=""
                              class="MuiInputBase-input MuiOutlinedInput-input css-156u99p-MuiInputBase-input-MuiOutlinedInput-input"
                              type="password"
                              name="password"
                            />
                            <fieldset
                              aria-hidden="true"
                              class="MuiOutlinedInput-notchedOutline css-1ll44ll-MuiOutlinedInput-notchedOutline"
                            >
                              <legend class="css-81qg8w">
                                <span>Password *</span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                      <div class="MuiStack-root css-15yln57-MuiStack-root">
                        <label class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-19opgx6-MuiFormControlLabel-root">
                          <span class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium css-1mmlv5e-MuiButtonBase-root-MuiCheckbox-root">
                            <span class="MuiTouchRipple-root css-r3djoj-MuiTouchRipple-root"></span>
                          </span>
                        </label>
                      </div>
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-t27b17-MuiButtonBase-root-MuiButton-root-MuiLoadingButton-root"
                        tabindex="0"
                        type="submit"
                        id=":r3:"
                      >
                        <span class="MuiLoadingButton-label css-27yv9x-MuiLoadingButton-label">
                          Sign Up
                        </span>
                        <span class="MuiTouchRipple-root css-r3djoj-MuiTouchRipple-root"></span>
                      </button>
                    </form>
                  </div>
                </div>
              </main>
            </div>
          </div>



      {/* preview-start */}
      {/* <Container sx={{ my: 20 }}>
        <Box sx={{ mt: 10, alignContent: "center" }}>
        
        
        </Box>
      </Container> */}
      {/* preview-end */}
    </AppProvider>
  );
}

export default Signup;