// CIE 1931 2-Degree Standard Observer Spectral Locus Coordinates (10nm intervals)
const SPECTRAL_LOCUS = [
    { wl: 380, x: 0.1741, y: 0.0050 },
    { wl: 390, x: 0.1738, y: 0.0049 },
    { wl: 400, x: 0.1733, y: 0.0048 },
    { wl: 410, x: 0.1726, y: 0.0048 },
    { wl: 420, x: 0.1714, y: 0.0051 },
    { wl: 430, x: 0.1689, y: 0.0069 },
    { wl: 440, x: 0.1644, y: 0.0109 },
    { wl: 450, x: 0.1566, y: 0.0177 },
    { wl: 460, x: 0.1440, y: 0.0297 },
    { wl: 470, x: 0.1241, y: 0.0578 },
    { wl: 480, x: 0.0913, y: 0.1327 },
    { wl: 490, x: 0.0465, y: 0.2950 },
    { wl: 500, x: 0.0082, y: 0.5384 },
    { wl: 510, x: 0.0093, y: 0.7504 },
    { wl: 520, x: 0.0633, y: 0.8339 },
    { wl: 530, x: 0.1735, y: 0.7762 },
    { wl: 540, x: 0.2390, y: 0.7347 },
    { wl: 550, x: 0.3168, y: 0.6766 },
    { wl: 560, x: 0.3957, y: 0.5960 },
    { wl: 570, x: 0.4705, y: 0.5186 },
    { wl: 580, x: 0.5376, y: 0.4549 },
    { wl: 590, x: 0.5954, y: 0.3995 },
    { wl: 600, x: 0.6402, y: 0.3551 },
    { wl: 610, x: 0.6658, y: 0.3340 },
    { wl: 620, x: 0.6915, y: 0.3083 },
    { wl: 630, x: 0.7079, y: 0.2920 },
    { wl: 640, x: 0.7190, y: 0.2809 },
    { wl: 650, x: 0.7260, y: 0.2740 },
    { wl: 660, x: 0.7300, y: 0.2700 },
    { wl: 670, x: 0.7320, y: 0.2680 },
    { wl: 680, x: 0.7334, y: 0.2666 },
    { wl: 690, x: 0.7344, y: 0.2656 },
    { wl: 700, x: 0.7347, y: 0.2653 },
    { wl: 710, x: 0.7347, y: 0.2653 },
    { wl: 720, x: 0.7347, y: 0.2653 },
    { wl: 730, x: 0.7347, y: 0.2653 },
    { wl: 740, x: 0.7347, y: 0.2653 },
    { wl: 750, x: 0.7347, y: 0.2653 },
    { wl: 760, x: 0.7347, y: 0.2653 },
    { wl: 770, x: 0.7347, y: 0.2653 },
    { wl: 780, x: 0.7347, y: 0.2653 }
];

const D65 = { x: 0.3127, y: 0.3290 };

const COLOR_NAMES = [
    { name: "Black", rgb: [0, 0, 0] },
    { name: "Charcoal", rgb: [54, 69, 79] },
    { name: "Dark Slate Gray", rgb: [47, 79, 79] },
    { name: "Dim Gray", rgb: [105, 105, 105] },
    { name: "Gray", rgb: [128, 128, 128] },
    { name: "Light Gray", rgb: [211, 211, 211] },
    { name: "Silver", rgb: [192, 192, 192] },
    { name: "White", rgb: [255, 255, 255] },
    { name: "Ivory", rgb: [255, 255, 240] },
    { name: "Warm White", rgb: [245, 245, 220] },
    { name: "Navy Blue", rgb: [0, 0, 128] },
    { name: "Midnight Blue", rgb: [25, 25, 112] },
    { name: "Dark Blue", rgb: [0, 0, 139] },
    { name: "Medium Blue", rgb: [0, 0, 205] },
    { name: "Blue", rgb: [0, 0, 255] },
    { name: "Royal Blue", rgb: [65, 105, 225] },
    { name: "Steel Blue", rgb: [70, 130, 180] },
    { name: "Dodger Blue", rgb: [30, 144, 255] },
    { name: "Deep Sky Blue", rgb: [0, 191, 255] },
    { name: "Sky Blue", rgb: [135, 206, 235] },
    { name: "Light Blue", rgb: [173, 216, 230] },
    { name: "Baby Blue", rgb: [137, 207, 240] },
    { name: "DAPI Blue", rgb: [0, 100, 255] },
    { name: "Cyan", rgb: [0, 255, 255] },
    { name: "Aqua", rgb: [0, 255, 255] },
    { name: "Turquoise", rgb: [64, 224, 208] },
    { name: "Teal", rgb: [0, 128, 128] },
    { name: "Dark Green", rgb: [0, 100, 0] },
    { name: "Green", rgb: [0, 128, 0] },
    { name: "Forest Green", rgb: [34, 139, 34] },
    { name: "Emerald Green", rgb: [80, 200, 120] },
    { name: "Sea Green", rgb: [46, 139, 87] },
    { name: "Lime Green", rgb: [50, 205, 50] },
    { name: "GFP Green", rgb: [0, 255, 100] },
    { name: "Lawn Green", rgb: [124, 252, 0] },
    { name: "Chartreuse", rgb: [127, 255, 0] },
    { name: "Yellow Green", rgb: [154, 205, 50] },
    { name: "Olive Green", rgb: [128, 128, 0] },
    { name: "Sage", rgb: [188, 184, 138] },
    { name: "Mint", rgb: [189, 252, 201] },
    { name: "Beige", rgb: [245, 245, 220] },
    { name: "Yellow", rgb: [255, 255, 0] },
    { name: "Lemon Yellow", rgb: [255, 250, 205] },
    { name: "Gold", rgb: [255, 215, 0] },
    { name: "Amber", rgb: [255, 191, 0] },
    { name: "Orange", rgb: [255, 165, 0] },
    { name: "Dark Orange", rgb: [255, 140, 0] },
    { name: "TRITC Orange", rgb: [255, 140, 0] },
    { name: "Coral", rgb: [255, 127, 80] },
    { name: "Tomato Red", rgb: [255, 99, 71] },
    { name: "Salmon Pink", rgb: [250, 128, 114] },
    { name: "Scarlet", rgb: [255, 36, 0] },
    { name: "Texas Red", rgb: [255, 40, 0] },
    { name: "Red", rgb: [255, 0, 0] },
    { name: "Crimson", rgb: [220, 20, 60] },
    { name: "Burgundy", rgb: [128, 0, 32] },
    { name: "Maroon", rgb: [128, 0, 0] },
    { name: "Firebrick", rgb: [178, 34, 34] },
    { name: "Brown", rgb: [165, 42, 42] },
    { name: "Chocolate", rgb: [210, 105, 30] },
    { name: "Sienna", rgb: [160, 82, 45] },
    { name: "Tan", rgb: [210, 180, 140] },
    { name: "Peach", rgb: [255, 218, 185] },
    { name: "Rose", rgb: [255, 0, 127] },
    { name: "Cy5 Pink-Red", rgb: [180, 0, 60] },
    { name: "Deep Pink", rgb: [255, 20, 147] },
    { name: "Hot Pink", rgb: [255, 105, 180] },
    { name: "Pink", rgb: [255, 192, 203] },
    { name: "Magenta", rgb: [255, 0, 255] },
    { name: "Fuchsia", rgb: [255, 0, 255] },
    { name: "Orchid", rgb: [218, 112, 214] },
    { name: "Plum", rgb: [221, 160, 221] },
    { name: "Violet", rgb: [238, 130, 238] },
    { name: "Lavender", rgb: [230, 230, 250] },
    { name: "Purple", rgb: [128, 0, 128] },
    { name: "Indigo", rgb: [75, 0, 130] },
    { name: "Slate Blue", rgb: [106, 90, 205] },
    { name: "Medium Purple", rgb: [147, 112, 219] }
];

// Sliders and Inputs
const redSlider = document.getElementById("red-slider");
const greenSlider = document.getElementById("green-slider");
const blueSlider = document.getElementById("blue-slider");
const redNum = document.getElementById("red-num");
const greenNum = document.getElementById("green-num");
const blueNum = document.getElementById("blue-num");
const colorPicker = document.getElementById("color-picker");
const hexInput = document.getElementById("hex-input");

// Analysis Readouts
const colorPreview = document.getElementById("color-preview");
const colorGlow = document.getElementById("color-glow");
const wavelengthDisplay = document.getElementById("wavelength-display");
const wavelengthUnit = document.getElementById("wavelength-unit");
const colorNameDisplay = document.getElementById("color-name-display");

const cieXVal = document.getElementById("cie-x");
const cieYVal = document.getElementById("cie-y");
const tristimulusX = document.getElementById("tristimulus-x");
const tristimulusY = document.getElementById("tristimulus-y");
const insightBox = document.getElementById("insight-box");

// Canvas settings
const canvas = document.getElementById("cie-canvas");
const ctx = canvas.getContext("2d");

// Logical dimensions for High-DPI scaling
const LOGICAL_WIDTH = 360;
const LOGICAL_HEIGHT = 380;

const padX = 30;
const padY = 30;
const scale = 340; // Aspect-preserving scale

// WebRTC Viewfinder Elements
const video = document.getElementById("camera-stream");
const scanToggle = document.getElementById("scan-toggle");
const calibrateBtn = document.getElementById("calibrate-btn");
const resetCalibBtn = document.getElementById("reset-calib-btn");
const calibStatus = document.getElementById("calib-status");
const bufferCanvas = document.getElementById("camera-buffer");
const bufferCtx = bufferCanvas.getContext("2d");

// Application States
let canvasBgImage = null;
let cameraStream = null;
let cameraActive = false;
let animationFrameId = null;

// Sensor calibration modifiers
let scaleR = 1.0;
let scaleG = 1.0;
let scaleB = 1.0;

// Coordinate transformations
function transformX(x) { return padX + x * scale; }
function transformY(y) { return LOGICAL_HEIGHT - padY - y * scale; }
function inverseX(cx) { return (cx - padX) / scale; }
function inverseY(cy) { return (LOGICAL_HEIGHT - padY - cy) / scale; }

function isPointInHorseshoe(x, y) {
    let inside = false;
    for (let i = 0, j = SPECTRAL_LOCUS.length - 1; i < SPECTRAL_LOCUS.length; j = i++) {
        let xi = SPECTRAL_LOCUS[i].x, yi = SPECTRAL_LOCUS[i].y;
        let xj = SPECTRAL_LOCUS[j].x, yj = SPECTRAL_LOCUS[j].y;
        
        let intersect = ((yi > y) !== (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}

function xyToRGB(x, y) {
    const Y = 1.0;
    const X = (x * Y) / y;
    const Z = ((1 - x - y) * Y) / y;
    
    let r = X * 3.2404542 + Y * -1.5371385 + Z * -0.4985314;
    let g = X * -0.9692660 + Y * 1.8760108 + Z * 0.0415560;
    let b = X * 0.0556434 + Y * -0.2040259 + Z * 1.0572252;
    
    const maxVal = Math.max(r, g, b);
    if (maxVal > 1.0) {
        r /= maxVal; g /= maxVal; b /= maxVal;
    }
    r = Math.max(0, r); g = Math.max(0, g); b = Math.max(0, b);
    
    r = (r <= 0.0031308) ? (12.92 * r) : (1.055 * Math.pow(r, 1.0 / 2.4) - 0.055);
    g = (g <= 0.0031308) ? (12.92 * g) : (1.055 * Math.pow(g, 1.0 / 2.4) - 0.055);
    b = (b <= 0.0031308) ? (12.92 * b) : (1.055 * Math.pow(b, 1.0 / 2.4) - 0.055);
    
    return [
        Math.min(255, Math.floor(r * 256)),
        Math.min(255, Math.floor(g * 256)),
        Math.min(255, Math.floor(b * 256))
    ];
}

function generateCIEBackground() {
    const width = LOGICAL_WIDTH;
    const height = LOGICAL_HEIGHT;
    
    const bufferCanvasBG = document.createElement("canvas");
    bufferCanvasBG.width = width;
    bufferCanvasBG.height = height;
    const bCtx = bufferCanvasBG.getContext("2d");
    
    const imgData = bCtx.createImageData(width, height);
    const data = imgData.data;
    
    for (let cy = 0; cy < height; cy++) {
        for (let cx = 0; cx < width; cx++) {
            const x = inverseX(cx);
            const y = inverseY(cy);
            const index = (cy * width + cx) * 4;
            
            if (isPointInHorseshoe(x, y) && y > 0) {
                const rgb = xyToRGB(x, y);
                data[index] = rgb[0];
                data[index + 1] = rgb[1];
                data[index + 2] = rgb[2];
                data[index + 3] = 255;
            } else {
                data[index] = 11;
                data[index + 1] = 14;
                data[index + 2] = 20;
                data[index + 3] = 0;
            }
        }
    }
    
    bCtx.putImageData(imgData, 0, 0);
    canvasBgImage = new Image();
    canvasBgImage.src = bufferCanvasBG.toDataURL();
}

function drawCIEBase() {
    ctx.clearRect(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);
    
    ctx.strokeStyle = "rgba(48, 54, 61, 0.2)";
    ctx.lineWidth = 1;
    for (let g = 0.1; g <= 0.8; g += 0.1) {
        ctx.beginPath();
        ctx.moveTo(transformX(g), transformY(0));
        ctx.lineTo(transformX(g), transformY(0.9));
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(transformX(0), transformY(g));
        ctx.lineTo(transformX(0.8), transformY(g));
        ctx.stroke();
    }

    ctx.strokeStyle = "rgba(139, 148, 158, 0.4)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(transformX(0), transformY(0));
    ctx.lineTo(transformX(0.85), transformY(0));
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(transformX(0), transformY(0));
    ctx.lineTo(transformX(0), transformY(0.9));
    ctx.stroke();
    
    ctx.fillStyle = "rgba(139, 148, 158, 0.7)";
    ctx.font = "9px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    for (let tick = 0.1; tick <= 0.8; tick += 0.1) {
        ctx.fillText(tick.toFixed(1), transformX(tick), transformY(0) + 4);
    }
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let tick = 0.1; tick <= 0.8; tick += 0.1) {
        ctx.fillText(tick.toFixed(1), transformX(0) - 6, transformY(tick));
    }

    if (canvasBgImage && canvasBgImage.complete) {
        ctx.drawImage(canvasBgImage, 0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);
    }
    
    ctx.strokeStyle = "#58a6ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    SPECTRAL_LOCUS.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(transformX(pt.x), transformY(pt.y));
        else ctx.lineTo(transformX(pt.x), transformY(pt.y));
    });
    ctx.stroke();
    
    ctx.strokeStyle = "rgba(122, 0, 255, 0.3)";
    ctx.beginPath();
    ctx.moveTo(transformX(SPECTRAL_LOCUS[0].x), transformY(SPECTRAL_LOCUS[0].y));
    ctx.lineTo(transformX(SPECTRAL_LOCUS[SPECTRAL_LOCUS.length-1].x), transformY(SPECTRAL_LOCUS[SPECTRAL_LOCUS.length-1].y));
    ctx.stroke();
}

function srgbToXy(R, G, B) {
    const r = R / 255;
    const g = G / 255;
    const b = B / 255;
    
    const rL = (r <= 0.04045) ? (r / 12.92) : Math.pow((r + 0.055) / 1.055, 2.4);
    const gL = (g <= 0.04045) ? (g / 12.92) : Math.pow((g + 0.055) / 1.055, 2.4);
    const bL = (b <= 0.04045) ? (b / 12.92) : Math.pow((b + 0.055) / 1.055, 2.4);
    
    const X = rL * 0.4124564 + gL * 0.3575761 + bL * 0.1804375;
    const Y = rL * 0.2126729 + gL * 0.7151522 + bL * 0.0721750;
    const Z = rL * 0.0193339 + gL * 0.1191920 + bL * 0.9503041;
    
    const sum = X + Y + Z;
    if (sum === 0) return { x: D65.x, y: D65.y, X: 0, Y: 0 };
    return { x: X / sum, y: Y / sum, X, Y };
}

function calculateWavelength(tx, ty) {
    const distToWhite = Math.hypot(tx - D65.x, ty - D65.y);
    if (distToWhite < 0.012) {
        return { type: "achromatic", wavelength: null, point: D65 };
    }
    
    const dx_ray = tx - D65.x;
    const dy_ray = ty - D65.y;
    const intersections = [];
    
    for (let i = 0; i < SPECTRAL_LOCUS.length - 1; i++) {
        const ptA = SPECTRAL_LOCUS[i];
        const ptB = SPECTRAL_LOCUS[i + 1];
        
        const dx_seg = ptB.x - ptA.x;
        const dy_seg = ptB.y - ptA.y;
        
        const det = dx_seg * dy_ray - dy_seg * dx_ray;
        if (Math.abs(det) < 1e-9) continue;
        
        const u = ((ptA.y - D65.y) * dx_seg - (ptA.x - D65.x) * dy_seg) / det;
        const v = (dx_ray * (ptA.y - D65.y) - dy_ray * (ptA.x - D65.x)) / det;
        
        if (v >= 0.0 && v <= 1.0001) {
            const wl = ptA.wl + v * (ptB.wl - ptA.wl);
            intersections.push({
                u: u, wl: wl,
                point: { x: ptA.x + v * dx_seg, y: ptA.y + v * dy_seg }
            });
        }
    }
    
    const positiveIntersection = intersections.find(inter => inter.u >= 0);
    if (positiveIntersection) {
        return { type: "dominant", wavelength: positiveIntersection.wl, point: positiveIntersection.point };
    } else {
        const negativeIntersection = intersections.find(inter => inter.u < 0);
        if (negativeIntersection) {
            return { type: "complementary", wavelength: negativeIntersection.wl, point: negativeIntersection.point };
        }
    }
    return { type: "unknown", wavelength: null, point: D65 };
}

function getClosestColorName(R, G, B) {
    let minDistance = Infinity;
    let closestName = "Unknown";
    
    COLOR_NAMES.forEach(color => {
        const cMean = (R + color.rgb[0]) / 2.0;
        const dR = R - color.rgb[0];
        const dG = G - color.rgb[1];
        const dB = B - color.rgb[2];
        
        const dist = Math.sqrt(
            (2 + cMean / 256.0) * dR * dR +
            4 * dG * dG +
            (2 + (255 - cMean) / 256.0) * dB * dB
        );
        if (dist < minDistance) {
            minDistance = dist;
            closestName = color.name;
        }
    });
    return closestName;
}

function getFluorescenceDyeContext(wl, isComplementary) {
    if (wl === 254) {
        return `
            <div class="insight-title">⚡ UV-C / Shortwave Ultraviolet (254 nm)</div>
            <p>254 nm is invisible shortwave UV-C light, highly germicidal because it splits chemical links in cellular DNA/RNA.</p>
            <p class="mt-2"><strong>Scientific Use:</strong> Surface sanitization, thin-layer chromatography (TLC) tracking, and mineral fluorescence testing.</p>
        `;
    }
    if (wl === 365) {
        return `
            <div class="insight-title">🔦 UV-A / Longwave Ultraviolet (365 nm)</div>
            <p>365 nm is near-ultraviolet "blacklight". Though invisible, it induces weak autofluorescence in the eye's lens.</p>
            <p class="mt-2"><strong>Fluorescence Focus:</strong> Forensic testing (fluorescing body fluids), currency authentication, and exciting UV dyes like <strong>DAPI</strong>.</p>
        `;
    }
    if (isComplementary) {
        return `
            <div class="insight-title">🟣 Non-Spectral Color (Purple/Magenta)</div>
            <p>Non-spectral mixtures of blue and red light have no individual physical wavelength. Hue is defined by its 
            <strong>complementary green wavelength of ${Math.round(wl)} nm</strong>.</p>
            <p class="mt-2"><strong>Dye Focus:</strong> Bright pink dyes like <strong>Rhodamine B</strong> show pink-magenta hues in ambient conditions.</p>
        `;
    }
    
    if (wl >= 380 && wl < 420) {
        return `
            <div class="insight-title">🟣 Near-UV / Deep Violet (${Math.round(wl)} nm)</div>
            <p>Violet light at the edge of vision (380-420nm) is commonly used to excite biological tags.</p>
            <p class="mt-2"><strong>Fluorescence Focus:</strong> The standard **405 nm laser** excites nuclear stains like <strong>DAPI</strong>.</p>
        `;
    } else if (wl >= 420 && wl < 485) {
        return `
            <div class="insight-title">🔵 Blue Spectrum (${Math.round(wl)} nm)</div>
            <p>Blue emission range (420-485 nm) represents standard optical tags.</p>
            <p class="mt-2"><strong>Fluorescence Focus:</strong> DAPI dye emits strongly at <strong>460 nm</strong>, illuminating chromosomes.</p>
        `;
    } else if (wl >= 485 && wl < 500) {
        return `
            <div class="insight-title">🌐 Cyan / Blue-Green (${Math.round(wl)} nm)</div>
            <p>Transition cyan band (485-500 nm).</p>
            <p class="mt-2"><strong>Fluorescence Focus:</strong> The standard **488 nm laser** excites **GFP** and **FITC / Fluorescein**.</p>
        `;
    } else if (wl >= 500 && wl < 550) {
        return `
            <div class="insight-title">🟢 Green Spectrum (${Math.round(wl)} nm)</div>
            <p>Green band (500-550 nm) represents peak visual sensitivity.</p>
            <p class="mt-2"><strong>Fluorescence Focus:</strong> Organic <strong>Fluorescein</strong> emits peak green light at <strong>521 nm</strong>. **GFP** emits at <strong>510-520 nm</strong>.</p>
        `;
    } else if (wl >= 550 && wl < 590) {
        return `
            <div class="insight-title">🟡 Yellow / Orange Spectrum (${Math.round(wl)} nm)</div>
            <p>Yellow-orange emission (550-590 nm).</p>
            <p class="mt-2"><strong>Fluorescence Focus:</strong> The **561 nm laser** excites **TRITC** and **PE**. pH indicator <strong>Methyl Orange</strong> colors this band.</p>
        `;
    } else if (wl >= 590 && wl < 630) {
        return `
            <div class="insight-title">🟠 Orange-Red Spectrum (${Math.round(wl)} nm)</div>
            <p>Orange-red emission (590-630 nm).</p>
            <p class="mt-2"><strong>Fluorescence Focus:</strong> Excitation and emission of red tags like **Texas Red** or **Rhodamine B**.</p>
        `;
    } else if (wl >= 630 && wl <= 780) {
        return `
            <div class="insight-title">🔴 Red / Far-Red Spectrum (${Math.round(wl)} nm)</div>
            <p>Deep red wavelengths (630-780 nm) are useful due to their superior biological tissue penetration.</p>
            <p class="mt-2"><strong>Fluorescence Focus:</strong> The **633 nm laser** excites **Cy5** emitting at **665 nm**.</p>
        `;
    }
    return "Select a color to view optical and biological insights.";
}

function updateColorAnalysis() {
    const r = parseInt(redSlider.value);
    const g = parseInt(greenSlider.value);
    const b = parseInt(blueSlider.value);
    
    redNum.value = r;
    greenNum.value = g;
    blueNum.value = b;
    
    const hex = "#" + [r, g, b].map(x => {
        const h = x.toString(16).toUpperCase();
        return h.length === 1 ? "0" + h : h;
    }).join("");
    hexInput.value = hex;
    colorPicker.value = hex;
    
    colorPreview.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    const cie = srgbToXy(r, g, b);
    cieXVal.textContent = cie.x.toFixed(4);
    cieYVal.textContent = cie.y.toFixed(4);
    tristimulusX.textContent = cie.X.toFixed(4);
    tristimulusY.textContent = cie.Y.toFixed(4);
    
    const wlData = calculateWavelength(cie.x, cie.y);
    
    // UV preset overrides
    let isUV = false;
    let uvWavelength = 380;
    let uvText = "";
    if (r === 75 && g === 0 && b === 130) {
        isUV = true; uvWavelength = 254; uvText = "254 (UV-C)";
    } else if (r === 100 && g === 0 && b === 200) {
        isUV = true; uvWavelength = 365; uvText = "365 (UV-A)";
    }
    
    if (wlData.type === "achromatic") {
        wavelengthDisplay.textContent = "Achromatic";
        wavelengthUnit.style.display = "none";
        colorPreview.style.boxShadow = `0 6px 15px rgba(255,255,255,0.15)`;
        document.documentElement.style.setProperty('--glow-color', 'rgba(255,255,255,0.15)');
        insightBox.innerHTML = `
            <div class="insight-title">⚪ Achromatic / Neutral Colors</div>
            <p>Neutral gray/white/black has no dominant wavelength since all spectral lines are mixed equally (near D65, x=0.3127, y=0.3290).</p>
        `;
    } else {
        const roundedWl = Math.round(wlData.wavelength * 10) / 10;
        
        const glowRgb = xyToRGB(wlData.point.x, wlData.point.y);
        const glowCss = `rgba(${glowRgb[0]}, ${glowRgb[1]}, ${glowRgb[2]}, 0.5)`;
        document.documentElement.style.setProperty('--glow-color', glowCss);
        colorPreview.style.boxShadow = `0 8px 20px ${glowCss}`;
        
        if (isUV) {
            wavelengthUnit.style.display = "inline";
            wavelengthDisplay.textContent = uvText;
            wavelengthDisplay.title = "Ultraviolet";
            insightBox.innerHTML = getFluorescenceDyeContext(uvWavelength, false);
        } else if (wlData.type === "dominant") {
            wavelengthUnit.style.display = "inline";
            wavelengthDisplay.textContent = roundedWl;
            wavelengthDisplay.title = "Dominant Wavelength";
            insightBox.innerHTML = getFluorescenceDyeContext(wlData.wavelength, false);
        } else if (wlData.type === "complementary") {
            wavelengthUnit.style.display = "none";
            wavelengthDisplay.textContent = "N/A";
            wavelengthDisplay.title = "Non-spectral / Mixed Color";
            insightBox.innerHTML = getFluorescenceDyeContext(wlData.wavelength, true);
        }
    }
    
    colorNameDisplay.textContent = getClosestColorName(r, g, b);
    drawCIEInteractive(cie, wlData);
}

function drawCIEInteractive(cie, wlData) {
    drawCIEBase();
    
    ctx.strokeStyle = "#ffffff";
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(transformX(D65.x), transformY(D65.y), 3.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = "rgba(240, 246, 252, 0.7)";
    ctx.fillText("D65", transformX(D65.x) + 6, transformY(D65.y) + 2);
    
    if (wlData.type === "achromatic") return;
    
    ctx.strokeStyle = "rgba(240, 246, 252, 0.4)";
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(transformX(wlData.point.x), transformY(wlData.point.y));
    ctx.lineTo(transformX(D65.x), transformY(D65.y));
    ctx.stroke();
    ctx.setLineDash([]);
    
    const intersectColor = xyToRGB(wlData.point.x, wlData.point.y);
    ctx.fillStyle = `rgb(${intersectColor[0]}, ${intersectColor[1]}, ${intersectColor[2]})`;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(transformX(wlData.point.x), transformY(wlData.point.y), 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    const r = parseInt(redSlider.value);
    const g = parseInt(greenSlider.value);
    const b = parseInt(blueSlider.value);
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(transformX(cie.x), transformY(cie.y), 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

// ==========================================
// WebRTC Camera Viewfinder & Analysis Logic
// ==========================================

async function startCamera() {
    try {
        calibStatus.textContent = "Requesting back camera permission...";
        
        // request rear camera on mobile devices
        const constraints = {
            video: {
                facingMode: { ideal: "environment" },
                width: { ideal: 640 },
                height: { ideal: 480 }
            },
            audio: false
        };
        
        cameraStream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = cameraStream;
        await video.play();
        
        cameraActive = true;
        calibrateBtn.disabled = false;
        resetCalibBtn.disabled = (scaleR === 1.0 && scaleG === 1.0 && scaleB === 1.0);
        calibStatus.textContent = "Sensor stream ACTIVE. Center reticle on targets.";
        
        // Start pixel extraction loop
        triggerFrameProcessing();
        
    } catch (err) {
        console.error("Camera acquisition failed:", err);
        calibStatus.textContent = "Error acquiring camera sensor: " + err.message;
        scanToggle.checked = false;
        cameraActive = false;
    }
}

function stopCamera() {
    cameraActive = false;
    calibrateBtn.disabled = true;
    resetCalibBtn.disabled = true;
    
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
    
    video.srcObject = null;
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    
    calibStatus.textContent = "Sensor stream INACTIVE.";
}

function triggerFrameProcessing() {
    if (!cameraActive) return;
    
    // Process frame if video is ready
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        if (video.videoWidth === 0 || video.videoHeight === 0) {
            animationFrameId = requestAnimationFrame(triggerFrameProcessing);
            return;
        }
        
        // Draw the center 10x10 pixels of the video feed to our buffer
        const sx = Math.floor(video.videoWidth / 2 - 5);
        const sy = Math.floor(video.videoHeight / 2 - 5);
        
        bufferCtx.drawImage(video, sx, sy, 10, 10, 0, 0, 10, 10);
        
        // Get average RGB values
        const imgData = bufferCtx.getImageData(0, 0, 10, 10);
        const pixels = imgData.data;
        
        let sumR = 0;
        let sumG = 0;
        let sumB = 0;
        
        for (let i = 0; i < pixels.length; i += 4) {
            sumR += pixels[i];
            sumG += pixels[i + 1];
            sumB += pixels[i + 2];
        }
        
        // Compute averages
        let avgR = sumR / 100;
        let avgG = sumG / 100;
        let avgB = sumB / 100;
        
        // Apply calibration modifiers
        let calR = Math.max(0, Math.min(255, Math.floor(avgR * scaleR)));
        let calG = Math.max(0, Math.min(255, Math.floor(avgG * scaleG)));
        let calB = Math.max(0, Math.min(255, Math.floor(avgB * scaleB)));
        
        // Update sliders and trigger standard analysis
        redSlider.value = calR;
        greenSlider.value = calG;
        blueSlider.value = calB;
        
        updateColorAnalysis();
    }
    
    animationFrameId = requestAnimationFrame(triggerFrameProcessing);
}

// Perform simple White Point Calibration
function calibrateSensor() {
    if (!cameraActive || video.readyState !== video.HAVE_ENOUGH_DATA) return;
    if (video.videoWidth === 0 || video.videoHeight === 0) return;
    
    const sx = Math.floor(video.videoWidth / 2 - 5);
    const sy = Math.floor(video.videoHeight / 2 - 5);
    
    bufferCtx.drawImage(video, sx, sy, 10, 10, 0, 0, 10, 10);
    const imgData = bufferCtx.getImageData(0, 0, 10, 10);
    const pixels = imgData.data;
    
    let sumR = 0, sumG = 0, sumB = 0;
    for (let i = 0; i < pixels.length; i += 4) {
        sumR += pixels[i];
        sumG += pixels[i + 1];
        sumB += pixels[i + 2];
    }
    
    const avgR = sumR / 100;
    const avgG = sumG / 100;
    const avgB = sumB / 100;
    
    // We calibrate this specific target to match white (255, 255, 255)
    // To protect against division by zero, check for dark frames
    if (avgR > 15 && avgG > 15 && avgB > 15) {
        // Calculate scaling multipliers
        scaleR = 255 / avgR;
        scaleG = 255 / avgG;
        scaleB = 255 / avgB;
        
        // Clamp scales to safe range [0.3, 3.0]
        scaleR = Math.max(0.3, Math.min(3.0, scaleR));
        scaleG = Math.max(0.3, Math.min(3.0, scaleG));
        scaleB = Math.max(0.3, Math.min(3.0, scaleB));
        
        calibStatus.textContent = `Calibrated! Multipliers: R:${scaleR.toFixed(2)}, G:${scaleG.toFixed(2)}, B:${scaleB.toFixed(2)}`;
        resetCalibBtn.disabled = false;
        
        // Add flash effect to preview box
        colorPreview.style.border = "3px solid #ffffff";
        setTimeout(() => { colorPreview.style.border = "1.5px solid rgba(240, 246, 252, 0.2)"; }, 500);
    } else {
        calibStatus.textContent = "Calibration FAILED: Frame too dark. Ensure brightness is sufficient.";
    }
}

// Standard UI Controls setup
function setupEventListeners() {
    const inputs = [
        { slider: redSlider, num: redNum },
        { slider: greenSlider, num: greenNum },
        { slider: blueSlider, num: blueNum }
    ];
    
    inputs.forEach(item => {
        item.slider.addEventListener("input", () => {
            if (cameraActive) {
                // Deactivate camera if manually dragging sliders to override
                scanToggle.checked = false;
                stopCamera();
            }
            item.num.value = item.slider.value;
            updateColorAnalysis();
        });
        
        item.num.addEventListener("change", () => {
            if (cameraActive) {
                scanToggle.checked = false;
                stopCamera();
            }
            let val = parseInt(item.num.value);
            if (isNaN(val)) val = 0;
            val = Math.max(0, Math.min(255, val));
            item.slider.value = val;
            updateColorAnalysis();
        });
    });
    
    colorPicker.addEventListener("input", () => {
        if (cameraActive) {
            scanToggle.checked = false;
            stopCamera();
        }
        const hex = colorPicker.value;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        
        redSlider.value = r;
        greenSlider.value = g;
        blueSlider.value = b;
        updateColorAnalysis();
    });
    
    document.querySelectorAll(".preset-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            if (cameraActive) {
                scanToggle.checked = false;
                stopCamera();
            }
            redSlider.value = btn.getAttribute("data-r");
            greenSlider.value = btn.getAttribute("data-g");
            blueSlider.value = btn.getAttribute("data-b");
            updateColorAnalysis();
        });
    });
    
    // Scan Toggle listener
    scanToggle.addEventListener("change", () => {
        if (scanToggle.checked) {
            startCamera();
        } else {
            stopCamera();
        }
    });
    
    // Calibration listener
    calibrateBtn.addEventListener("click", calibrateSensor);

    // Calibration Reset listener
    resetCalibBtn.addEventListener("click", () => {
        scaleR = 1.0;
        scaleG = 1.0;
        scaleB = 1.0;
        calibStatus.textContent = "Calibration reset to defaults.";
        resetCalibBtn.disabled = true;
        
        // Add a temporary green success border flash
        colorPreview.style.border = "3px solid var(--green-color)";
        setTimeout(() => { colorPreview.style.border = "1.5px solid rgba(240, 246, 252, 0.2)"; }, 500);
        
        if (cameraActive) {
            triggerFrameProcessing();
        } else {
            updateColorAnalysis();
        }
    });

    // CIE Canvas Click & Drag Interaction
    let isDragging = false;

    function handleCanvasInteraction(event) {
        const rect = canvas.getBoundingClientRect();
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;
        
        const cx = (clientX - rect.left) * (LOGICAL_WIDTH / rect.width);
        const cy = (clientY - rect.top) * (LOGICAL_HEIGHT / rect.height);
        
        const x = inverseX(cx);
        const y = inverseY(cy);
        
        if (isPointInHorseshoe(x, y) && y > 0) {
            if (cameraActive) {
                scanToggle.checked = false;
                stopCamera();
            }
            const rgb = xyToRGB(x, y);
            redSlider.value = rgb[0];
            greenSlider.value = rgb[1];
            blueSlider.value = rgb[2];
            updateColorAnalysis();
        }
    }

    canvas.addEventListener("mousedown", (e) => {
        isDragging = true;
        handleCanvasInteraction(e);
    });

    window.addEventListener("mousemove", (e) => {
        if (isDragging) {
            handleCanvasInteraction(e);
        }
    });

    window.addEventListener("mouseup", () => {
        isDragging = false;
    });

    canvas.addEventListener("touchstart", (e) => {
        isDragging = true;
        handleCanvasInteraction(e);
        e.preventDefault();
    }, { passive: false });

    window.addEventListener("touchmove", (e) => {
        if (isDragging) {
            handleCanvasInteraction(e);
            e.preventDefault();
        }
    }, { passive: false });

    window.addEventListener("touchend", () => {
        isDragging = false;
    });
}

// Initialise the canvas drawing buffer size for High-DPI screens
function initCanvasDPR() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = LOGICAL_WIDTH * dpr;
    canvas.height = LOGICAL_HEIGHT * dpr;
    canvas.style.width = LOGICAL_WIDTH + "px";
    canvas.style.height = LOGICAL_HEIGHT + "px";
    ctx.scale(dpr, dpr);
}

// Initialise the application
window.addEventListener("load", () => {
    initCanvasDPR();
    generateCIEBackground();
    setupEventListeners();
    updateColorAnalysis();
});
