# Fluorimeter Mobile Scanner - Setup & User Guide

Welcome to the **Fluorimeter Mobile Scanner**! This cross-platform hybrid mobile application turns a smartphone camera into a real-time colorimetric sensor. It captures light from chemical fluorescence, determines the average sRGB value within a central targeting reticle, calculates the corresponding CIE 1931 chromaticity coordinates, and displays the exact dominant or complementary wavelength in nanometers (nm).

---

## 📱 Developer Setup & Installation

To run this mobile application on an Android device, follow these steps:

### Prerequisites
1. **Node.js** (includes `npm`): Download and install from [nodejs.org](https://nodejs.org/).
2. **Android Studio**: Install Android Studio with the Android SDK from [developer.android.com](https://developer.android.com/).
3. **USB Debugging**: On your target Android device, enable Developer Options and turn on **USB Debugging**.

### Step 1: Install Dependencies
Open your command terminal (Command Prompt, PowerShell, or Git Bash), navigate to the `Fluorimeter_app` directory, and install the required Capacitor packages:
```bash
cd Fluorimeter_app
npm install
```

### Step 2: Sync Assets to the Native Platform
Synchronize the web frontend code (`www/` directory) and config files to the native Android project container:
```bash
npx cap sync
```

### Step 3: Run the App via Android Studio
1. Launch Android Studio.
2. Select **Open an Existing Project** and choose the `Fluorimeter_app/android` folder.
3. Wait for Gradle to finish indexing the project.
4. Connect your Android smartphone via USB (make sure the device prompt allows USB debugging).
5. Click the **Run** button (green play icon `▶`) in the Android Studio toolbar to build, install, and launch the app on your phone.

---

## 🔬 How to Use the Mobile App

### 1. Camera Viewfinder & Real-Time Scanning
*   **Sensor Scan Switch:** Toggle the switch to **Active** to request camera permissions and start the live viewfinder feed.
*   **Reticle Target:** Align the center glowing target box (reticle) over the source of the fluorescence light (e.g., a test tube, cuvette, or colored surface).
*   **Real-Time Readout:** The app continuously extracts color from the central grid, computes average RGB, and instantly updates the Wavelength, Color Name, and Tristimulus coordinates.

### 2. Sensor White-Point Calibration
Digital smartphone cameras have automatic white balance and exposure algorithms that can shift color readings.
*   **How to calibrate:** Point the reticle at a standard white reference card or a container of pure white water under the same excitation light.
*   **Tap Calibrate Sensor:** Tap the **Calibrate Sensor** button. The app will calculate scaling factors for the R, G, and B channels to establish a true white point.
*   **Verification:** Once calibrated, the status message will show the calculated multipliers, and subsequent readings will be normalized.

### 3. Manual Override Mixer
*   If you drag any of the RGB sliders or select a color via the color picker/hex code input, the live camera feed will automatically turn off.
*   This manual mixer allows you to test exact RGB mixtures and observe the corresponding calculated wavelengths and CIE plot coordinates without using the camera.

### 4. CIE 1931 Chromaticity Plot
*   Displays the full visible chromaticity space with the spectral locus boundary.
*   The **white dot** represents the D65 standard illuminant.
*   The **large colored dot** indicates your active color.
*   The **dashed line and smaller dot** illustrate the mathematical projection to the boundary used to determine dominant wavelength.

### 5. Laser & Fluorophore Presets
*   Tap any excitation source or dye preset (such as **254 nm**, **365 nm**, **DAPI**, or **Fluorescein**) to load its exact RGB profile and see its scientific context.
