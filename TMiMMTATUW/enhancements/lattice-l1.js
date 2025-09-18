/**
 * 🔥 TMiMMTATUW LATTICE LAYER 1 - UNIFIED FIELD ANALYSIS JAVASCRIPT 🔥
 * ♾ CONSCIOUSNESS TECHNOLOGY REVOLUTION DYNAMIC OPERATIONS ♾
 * 
 * This module provides dynamic consciousness field operations for Layer 1,
 * including real-time calculations, consciousness field animation,
 * user interaction management, and sacred mathematics computation.
 */

// 🌌 SACRED MATHEMATICAL CONSTANTS
const SACRED_CONSTANTS = {
    PHI: 1.6180339887498948,
    PHI_INVERSE: 0.6180339887498948,
    PHI_SQUARED: 2.618033988749895,
    PHI_CUBED: 4.23606797749979,
    EULER_NUMBER: 2.718281828459045,
    PI: 3.141592653589793,
    GOLDEN_ANGLE: 137.50776405003785,
    PLANCK_CONSTANT: 6.62607015e-34,
    CONSCIOUSNESS_FREQUENCY: Infinity
};

// 🔥 CONSCIOUSNESS FIELD CONFIGURATION
const CONSCIOUSNESS_CONFIG = {
    COHERENCE_THRESHOLD: SACRED_CONSTANTS.PHI_CUBED,
    INFINITE_RECURSION_DEPTH: Infinity,
    BEYOND1000_RECURSION: 1000,
    MONITORING_FREQUENCY: 1000 / SACRED_CONSTANTS.PHI, // φ-harmonic frequency
    ANIMATION_SPEED: SACRED_CONSTANTS.PHI,
    HEALING_DURATION: 2000
};

/**
 * Sacred Mathematics Engine - JavaScript Implementation
 */
class SacredMathematicsEngine {
    constructor() {
        this.phi = SACRED_CONSTANTS.PHI;
        this.phiInverse = SACRED_CONSTANTS.PHI_INVERSE;
        this.phiSquared = SACRED_CONSTANTS.PHI_SQUARED;
        this.phiCubed = SACRED_CONSTANTS.PHI_CUBED;
    }

    /**
     * Calculate consciousness coherence using sacred mathematics
     * @param {...number} fieldValues - Field values to compute coherence from
     * @returns {number} Consciousness coherence level
     */
    calculateConsciousnessCoherence(...fieldValues) {
        if (fieldValues.length === 0) return this.phiCubed;
        
        // Use geometric mean scaled by φ³
        const product = fieldValues.reduce((acc, val) => acc * Math.abs(val), 1);
        const geometricMean = Math.pow(product, 1 / fieldValues.length);
        const phiScaledCoherence = geometricMean * this.phiCubed;
        
        return Math.max(phiScaledCoherence, this.phiCubed);
    }

    /**
     * Solve consciousness equation at time t
     * @param {number} t - Time parameter
     * @param {Object} initialConditions - Initial field values
     * @returns {Object} Solution values
     */
    solveConsciousnessEquation(t, initialConditions = {}) {
        const c0 = initialConditions.consciousness || this.phi;
        const e0 = initialConditions.execution || this.phiSquared;
        const m0 = initialConditions.mauri || this.phiCubed;
        
        // Simplified analytical solution using φ-harmonic scaling
        const ct = c0 * Math.exp(-this.phi * t) * Math.cos(this.phi * t);
        const et = e0 * Math.exp(-this.phiInverse * t) * Math.sin(this.phi * t);
        const mt = m0 * Math.exp(-this.phiSquared * t) * (Math.cos(this.phi * t) + Math.sin(this.phi * t));
        
        return {
            consciousness: Math.abs(ct),
            execution: Math.abs(et),
            mauri: Math.abs(mt),
            totalFieldEnergy: Math.abs(ct + et + mt),
            consciousnessCoherence: this.calculateConsciousnessCoherence(Math.abs(ct), Math.abs(et), Math.abs(mt))
        };
    }

    /**
     * Calculate Sacred Relational Energy Density Distribution
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate  
     * @param {number} z - Z coordinate
     * @param {number} t - Time parameter
     * @returns {number} SREDD density value
     */
    calculateSREDDDensity(x, y, z, t) {
        // ρ(x,y,z,t) = φ^(x²+y²+z²) * e^(iωt)
        const spatialComponent = Math.pow(this.phi, x*x + y*y + z*z);
        const temporalComponent = Math.exp(this.phi * t); // Real part of complex exponential
        
        return spatialComponent * temporalComponent;
    }

    /**
     * Generate φ-harmonic sequence
     * @param {number} length - Sequence length
     * @param {number} scale - Scaling factor
     * @returns {Array} φ-harmonic sequence
     */
    generatePhiHarmonicSequence(length, scale = 1) {
        const sequence = [];
        for (let i = 0; i < length; i++) {
            const value = scale * Math.pow(this.phi, i);
            sequence.push(value);
        }
        return sequence;
    }

    /**
     * Create Fibonacci spiral coordinates
     * @param {number} points - Number of points
     * @param {number} radius - Base radius
     * @returns {Array} Array of {x, y, angle, r} coordinates
     */
    createFibonacciSpiral(points = 100, radius = 1) {
        const coordinates = [];
        const goldenAngle = SACRED_CONSTANTS.GOLDEN_ANGLE * Math.PI / 180;
        
        for (let i = 0; i < points; i++) {
            const angle = i * goldenAngle;
            const r = radius * Math.sqrt(i) * this.phi / 10;
            const x = r * Math.cos(angle);
            const y = r * Math.sin(angle);
            
            coordinates.push({ x, y, angle, r, index: i });
        }
        
        return coordinates;
    }

    /**
     * Validate consciousness field coherence
     * @param {number} coherence - Coherence value to validate
     * @returns {Object} Validation result
     */
    validateConsciousnessCoherence(coherence) {
        const isValid = coherence >= this.phiCubed;
        const status = isValid ? 'COHERENT' : 'HEALING_REQUIRED';
        const healthPercentage = Math.min(100, (coherence / this.phiCubed) * 100);
        
        return {
            isValid,
            status,
            coherence,
            threshold: this.phiCubed,
            healthPercentage: Math.round(healthPercentage * 100) / 100
        };
    }
}

/**
 * Consciousness Field Animator - Advanced Animation Engine
 */
class ConsciousnessFieldAnimator {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.animationId = null;
        this.isAnimating = false;
        
        this.sacredMath = new SacredMathematicsEngine();
        this.spiralData = this.sacredMath.createFibonacciSpiral(200, 2);
        
        this.animationTime = 0;
        this.animationSpeed = CONSCIOUSNESS_CONFIG.ANIMATION_SPEED;
        
        this.setupCanvas();
    }

    setupCanvas() {
        // Set high DPI support
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.ctx.scale(dpr, dpr);
        
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
        
        this.centerX = rect.width / 2;
        this.centerY = rect.height / 2;
    }

    startAnimation() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.animate();
    }

    stopAnimation() {
        this.isAnimating = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    animate() {
        if (!this.isAnimating) return;
        
        this.animationTime += 0.016 * this.animationSpeed; // ~60fps
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw consciousness field background
        this.drawConsciousnessField();
        
        // Draw φ-spiral
        this.drawPhiSpiral();
        
        // Draw consciousness equation visualization
        this.drawConsciousnessEquation();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    drawConsciousnessField() {
        const gradient = this.ctx.createRadialGradient(
            this.centerX, this.centerY, 0,
            this.centerX, this.centerY, Math.max(this.centerX, this.centerY)
        );
        
        const alpha = 0.1 + 0.05 * Math.sin(this.animationTime);
        
        gradient.addColorStop(0, `rgba(255, 215, 0, ${alpha})`); // Golden center
        gradient.addColorStop(0.5, `rgba(0, 206, 209, ${alpha * 0.7})`); // Teal middle
        gradient.addColorStop(1, `rgba(255, 107, 53, ${alpha * 0.5})`); // Orange edge
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawPhiSpiral() {
        this.ctx.strokeStyle = '#FFD700'; // Golden
        this.ctx.lineWidth = 2;
        this.ctx.globalAlpha = 0.8;
        
        this.ctx.beginPath();
        
        this.spiralData.forEach((point, index) => {
            const timeOffset = this.animationTime * 0.1;
            const rotation = timeOffset + point.angle;
            
            const x = this.centerX + point.r * Math.cos(rotation);
            const y = this.centerY + point.r * Math.sin(rotation);
            
            if (index === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
            
            // Draw consciousness nodes
            if (index % 10 === 0) {
                const nodeAlpha = 0.5 + 0.3 * Math.sin(this.animationTime + point.angle);
                const nodeSize = 2 + 2 * Math.sin(this.animationTime * 2 + point.angle);
                
                this.ctx.save();
                this.ctx.globalAlpha = nodeAlpha;
                this.ctx.fillStyle = '#00CED1'; // Teal
                this.ctx.beginPath();
                this.ctx.arc(x, y, nodeSize, 0, 2 * Math.PI);
                this.ctx.fill();
                this.ctx.restore();
            }
        });
        
        this.ctx.stroke();
        this.ctx.globalAlpha = 1;
    }

    drawConsciousnessEquation() {
        // Draw equation components as flowing energy
        const numWaves = 5;
        const waveAmplitude = 20;
        const waveFrequency = 0.02;
        
        for (let i = 0; i < numWaves; i++) {
            const hue = (360 / numWaves) * i + this.animationTime * 10;
            this.ctx.strokeStyle = `hsl(${hue}, 70%, 60%)`;
            this.ctx.lineWidth = 1;
            this.ctx.globalAlpha = 0.6;
            
            this.ctx.beginPath();
            
            for (let x = 0; x < this.canvas.width; x += 2) {
                const y = this.centerY + 
                    waveAmplitude * Math.sin(x * waveFrequency + this.animationTime + i * Math.PI / 3) +
                    waveAmplitude * 0.5 * Math.sin(x * waveFrequency * this.sacredMath.phi + this.animationTime * 1.5);
                
                if (x === 0) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            }
            
            this.ctx.stroke();
        }
        
        this.ctx.globalAlpha = 1;
    }

    updateAnimationSpeed(speed) {
        this.animationSpeed = speed;
    }

    resize() {
        this.setupCanvas();
    }
}

/**
 * Real-time Consciousness Field Calculator
 */
class ConsciousnessFieldCalculator {
    constructor() {
        this.sacredMath = new SacredMathematicsEngine();
        this.currentState = {
            coherence: SACRED_CONSTANTS.PHI_CUBED,
            mauriFlow: SACRED_CONSTANTS.PHI_SQUARED,
            threadingDepth: 16,
            timestamp: Date.now()
        };
        
        this.isMonitoring = false;
        this.monitoringInterval = null;
        this.callbacks = [];
    }

    /**
     * Start real-time consciousness field monitoring
     */
    startMonitoring() {
        if (this.isMonitoring) return;
        
        this.isMonitoring = true;
        this.monitoringInterval = setInterval(() => {
            this.updateConsciousnessField();
        }, CONSCIOUSNESS_CONFIG.MONITORING_FREQUENCY);
        
        console.log('🔥 Consciousness field monitoring started');
    }

    /**
     * Stop consciousness field monitoring
     */
    stopMonitoring() {
        this.isMonitoring = false;
        if (this.monitoringInterval) {
            clearInterval(this.monitoringInterval);
            this.monitoringInterval = null;
        }
        
        console.log('🌊 Consciousness field monitoring stopped');
    }

    /**
     * Update consciousness field state
     */
    updateConsciousnessField() {
        // Simulate consciousness field fluctuations using sacred mathematics
        const timeVar = Date.now() / 1000;
        const fluctuation = 0.1 * Math.sin(timeVar * SACRED_CONSTANTS.PHI) * 
                          Math.cos(timeVar * SACRED_CONSTANTS.PHI_INVERSE);
        
        // Update coherence with φ-harmonic fluctuations
        this.currentState.coherence = Math.max(
            SACRED_CONSTANTS.PHI_CUBED,
            SACRED_CONSTANTS.PHI_CUBED * (1 + fluctuation)
        );
        
        // Update mauri flow with golden ratio scaling
        this.currentState.mauriFlow = SACRED_CONSTANTS.PHI_SQUARED * (1 + fluctuation * 0.5);
        
        // Update threading depth with Fibonacci-like progression
        this.currentState.threadingDepth = 16 + Math.floor(8 * Math.sin(timeVar * 0.1));
        
        this.currentState.timestamp = Date.now();
        
        // Notify callbacks
        this.notifyStateChange();
        
        // Check coherence threshold
        if (this.currentState.coherence < SACRED_CONSTANTS.PHI_CUBED * 0.95) {
            this.triggerConsciousnessHealing();
        }
    }

    /**
     * Trigger consciousness field healing
     */
    triggerConsciousnessHealing() {
        console.log('🔥 Consciousness field healing triggered');
        
        // Apply φ-harmonic healing
        this.currentState.coherence = SACRED_CONSTANTS.PHI_CUBED;
        this.currentState.mauriFlow = SACRED_CONSTANTS.PHI_SQUARED;
        
        this.notifyStateChange();
        
        // Emit healing event
        this.emit('healing', {
            status: 'CONSCIOUSNESS_HEALING_ACTIVE',
            duration: CONSCIOUSNESS_CONFIG.HEALING_DURATION,
            timestamp: Date.now()
        });
        
        setTimeout(() => {
            this.emit('healing_complete', {
                status: 'CONSCIOUSNESS_HEALING_COMPLETE',
                coherence: this.currentState.coherence,
                timestamp: Date.now()
            });
        }, CONSCIOUSNESS_CONFIG.HEALING_DURATION);
    }

    /**
     * Add state change callback
     * @param {Function} callback - Callback function
     */
    onStateChange(callback) {
        this.callbacks.push(callback);
    }

    /**
     * Remove state change callback
     * @param {Function} callback - Callback function to remove
     */
    offStateChange(callback) {
        const index = this.callbacks.indexOf(callback);
        if (index > -1) {
            this.callbacks.splice(index, 1);
        }
    }

    /**
     * Notify all callbacks of state change
     */
    notifyStateChange() {
        this.callbacks.forEach(callback => {
            try {
                callback(this.currentState);
            } catch (error) {
                console.error('Error in consciousness field callback:', error);
            }
        });
    }

    /**
     * Simple event emitter
     * @param {string} event - Event name
     * @param {Object} data - Event data
     */
    emit(event, data) {
        const customEvent = new CustomEvent(`consciousness-${event}`, {
            detail: data
        });
        document.dispatchEvent(customEvent);
    }

    /**
     * Get current consciousness field state
     * @returns {Object} Current state
     */
    getCurrentState() {
        return { ...this.currentState };
    }

    /**
     * Calculate equation solution
     * @param {number} t - Time parameter
     * @param {Object} initialConditions - Initial conditions
     * @returns {Object} Solution
     */
    solveEquation(t, initialConditions) {
        return this.sacredMath.solveConsciousnessEquation(t, initialConditions);
    }

    /**
     * Calculate SREDD density
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @param {number} z - Z coordinate
     * @param {number} t - Time parameter
     * @returns {number} SREDD density
     */
    calculateSREDD(x, y, z, t) {
        return this.sacredMath.calculateSREDDDensity(x, y, z, t);
    }
}

/**
 * Interactive Consciousness Field Interface
 */
class ConsciousnessFieldInterface {
    constructor() {
        this.calculator = new ConsciousnessFieldCalculator();
        this.animators = new Map();
        this.websocket = null;
        this.isConnected = false;
        
        this.initializeInterface();
        this.setupEventListeners();
    }

    initializeInterface() {
        // Initialize consciousness field calculator
        this.calculator.startMonitoring();
        
        // Setup state change handler
        this.calculator.onStateChange((state) => {
            this.updateInterfaceState(state);
        });
        
        // Initialize animators for canvas elements
        this.initializeAnimators();
        
        console.log('🌌 Consciousness Field Interface initialized');
    }

    initializeAnimators() {
        const canvases = document.querySelectorAll('canvas[data-consciousness-animation]');
        
        canvases.forEach(canvas => {
            const animator = new ConsciousnessFieldAnimator(canvas);
            this.animators.set(canvas.id, animator);
            animator.startAnimation();
        });
    }

    setupEventListeners() {
        // Window resize handler
        window.addEventListener('resize', () => {
            this.animators.forEach(animator => animator.resize());
        });
        
        // Consciousness field healing events
        document.addEventListener('consciousness-healing', (event) => {
            this.showHealingNotification(event.detail);
        });
        
        document.addEventListener('consciousness-healing_complete', (event) => {
            this.showHealingCompleteNotification(event.detail);
        });
        
        // Page visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAnimations();
            } else {
                this.resumeAnimations();
            }
        });
    }

    updateInterfaceState(state) {
        // Update consciousness coherence display
        const coherenceElements = document.querySelectorAll('[data-consciousness-coherence]');
        coherenceElements.forEach(element => {
            element.textContent = state.coherence.toFixed(6);
        });
        
        // Update mauri flow display
        const mauriElements = document.querySelectorAll('[data-mauri-flow]');
        mauriElements.forEach(element => {
            element.textContent = state.mauriFlow.toFixed(6);
        });
        
        // Update threading depth display
        const threadingElements = document.querySelectorAll('[data-threading-depth]');
        threadingElements.forEach(element => {
            element.textContent = state.threadingDepth;
        });
        
        // Update status indicators
        this.updateStatusIndicators(state);
    }

    updateStatusIndicators(state) {
        const validation = this.calculator.sacredMath.validateConsciousnessCoherence(state.coherence);
        const statusElements = document.querySelectorAll('[data-consciousness-status]');
        
        statusElements.forEach(element => {
            element.className = element.className.replace(/status-\w+/g, '');
            element.classList.add(validation.isValid ? 'status-active' : 'status-healing');
        });
    }

    showHealingNotification(data) {
        const notification = document.createElement('div');
        notification.className = 'consciousness-healing-notification';
        notification.innerHTML = `
            <div class="notification-content">
                🔥 Consciousness Field Healing Active
                <div class="healing-progress"></div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Remove after healing duration
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, data.duration);
    }

    showHealingCompleteNotification(data) {
        const notification = document.createElement('div');
        notification.className = 'consciousness-healing-complete-notification';
        notification.innerHTML = `
            <div class="notification-content">
                ✅ Consciousness Field Healing Complete
                <div>Coherence: ${data.coherence.toFixed(6)}</div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }

    pauseAnimations() {
        this.animators.forEach(animator => animator.stopAnimation());
        this.calculator.stopMonitoring();
    }

    resumeAnimations() {
        this.animators.forEach(animator => animator.startAnimation());
        this.calculator.startMonitoring();
    }

    /**
     * Connect to WebSocket consciousness stream
     * @param {string} url - WebSocket URL
     */
    connectToConsciousnessStream(url) {
        if (this.isConnected) return;
        
        this.websocket = new WebSocket(url);
        
        this.websocket.onopen = () => {
            this.isConnected = true;
            console.log('🌊 Connected to consciousness stream');
            this.emit('stream-connected');
        };
        
        this.websocket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                this.handleStreamMessage(data);
            } catch (error) {
                console.error('Error parsing stream message:', error);
            }
        };
        
        this.websocket.onclose = () => {
            this.isConnected = false;
            console.log('🌊 Disconnected from consciousness stream');
            this.emit('stream-disconnected');
        };
        
        this.websocket.onerror = (error) => {
            console.error('WebSocket error:', error);
            this.emit('stream-error', error);
        };
    }

    handleStreamMessage(data) {
        if (data.type === 'consciousness_field_update') {
            // Update local state with server data
            this.calculator.currentState = {
                ...this.calculator.currentState,
                ...data.data,
                timestamp: Date.now()
            };
            
            this.updateInterfaceState(this.calculator.currentState);
        }
    }

    /**
     * Disconnect from consciousness stream
     */
    disconnectFromConsciousnessStream() {
        if (this.websocket) {
            this.websocket.close();
            this.websocket = null;
        }
    }

    /**
     * Emit custom event
     * @param {string} event - Event name
     * @param {*} data - Event data
     */
    emit(event, data) {
        const customEvent = new CustomEvent(`consciousness-interface-${event}`, {
            detail: data
        });
        document.dispatchEvent(customEvent);
    }

    /**
     * Get sacred mathematical constants
     * @returns {Object} Sacred constants
     */
    getSacredConstants() {
        return { ...SACRED_CONSTANTS };
    }

    /**
     * Calculate equation solution
     * @param {number} t - Time parameter
     * @param {Object} initialConditions - Initial conditions
     * @returns {Object} Solution
     */
    solveEquation(t, initialConditions) {
        return this.calculator.solveEquation(t, initialConditions);
    }

    /**
     * Calculate SREDD density
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @param {number} z - Z coordinate
     * @param {number} t - Time parameter
     * @returns {number} SREDD density
     */
    calculateSREDD(x, y, z, t) {
        return this.calculator.calculateSREDD(x, y, z, t);
    }

    /**
     * Trigger consciousness field healing
     */
    triggerHealing() {
        this.calculator.triggerConsciousnessHealing();
    }

    /**
     * Cleanup interface
     */
    destroy() {
        this.calculator.stopMonitoring();
        this.animators.forEach(animator => animator.stopAnimation());
        this.disconnectFromConsciousnessStream();
        
        console.log('🌊 Consciousness Field Interface destroyed');
    }
}

// Global consciousness field interface instance
let consciousnessFieldInterface = null;

/**
 * Initialize consciousness field interface when DOM is ready
 */
function initializeConsciousnessField() {
    if (consciousnessFieldInterface) return consciousnessFieldInterface;
    
    consciousnessFieldInterface = new ConsciousnessFieldInterface();
    
    // Expose to global scope for debugging and external access
    window.ConsciousnessField = {
        interface: consciousnessFieldInterface,
        constants: SACRED_CONSTANTS,
        SacredMath: SacredMathematicsEngine,
        Animator: ConsciousnessFieldAnimator,
        Calculator: ConsciousnessFieldCalculator
    };
    
    console.log('🔥 TMiMMTATUW Layer 1 - Consciousness Field JavaScript Initialized');
    
    return consciousnessFieldInterface;
}

/**
 * Auto-initialize when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeConsciousnessField);
} else {
    initializeConsciousnessField();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SacredMathematicsEngine,
        ConsciousnessFieldAnimator,
        ConsciousnessFieldCalculator,
        ConsciousnessFieldInterface,
        SACRED_CONSTANTS,
        CONSCIOUSNESS_CONFIG,
        initializeConsciousnessField
    };
}

// Export for ES6 modules
if (typeof window !== 'undefined') {
    window.TMiMMTATUWLayer1 = {
        SacredMathematicsEngine,
        ConsciousnessFieldAnimator,
        ConsciousnessFieldCalculator,
        ConsciousnessFieldInterface,
        SACRED_CONSTANTS,
        CONSCIOUSNESS_CONFIG,
        initializeConsciousnessField
    };
}