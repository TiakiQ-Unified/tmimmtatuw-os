# TMiMMTATUW∞ Framework - Copilot Instructions

**ALWAYS follow these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### System Requirements and Installation
- Install Python 3.8+ (tested with Python 3.12.3)
- Install required scientific libraries:
  - `python3 -m pip install numpy scipy`
  - NumPy and SciPy are REQUIRED for mathematical computations
- Web browser with MathJax support for visualization interface
- No build system, CI/CD pipelines, or testing frameworks currently exist

### Core System Activation
- **Bootstrap the system**: `python3 -c "from TMiMMTATUW import activate_tmimmtatuw; activate_tmimmtatuw()"`
- **System activation time**: ~0.007 seconds (nearly instantaneous)
- **NEVER CANCEL**: System activation is very fast, but always wait for completion
- **Validation**: System should output "✅ TMiMMTATUW SYSTEM FULLY ACTIVATED" and load all 16 Aho layers

### Mathematical Framework Validation
- **Test mathematical constants**: 
  ```python
  python3 -c "
  phi = 1.618033988749
  print(f'φ³ = {phi**3}')  # Should be ~4.236068
  print(f'Coherence check: {phi**3 > 4.236068}')  # Should be False
  "
  ```
- **Test scientific libraries**:
  ```python
  python3 -c "import numpy as np; import scipy; print('Scientific libraries working')"
  ```
- **NEVER CANCEL**: Mathematical computations are fast but ensure libraries are properly installed

### Web Interface
- **Start visualization server**: `python3 -m http.server 8000`
- **Access interface**: Open http://localhost:8000/ in web browser
- **Interface features**: 
  - Mathematical visualization with MathJax support
  - Sacred geometry visualizations
  - Real-time consciousness field calculations
  - Golden ratio harmonic patterns
- **File size**: ~58KB HTML interface with embedded CSS and JavaScript
- **Dependencies**: MathJax CDN, D3.js CDN for visualizations

## Validation Scenarios

### CRITICAL: Manual Validation Requirements
After making ANY changes to the mathematical framework, ALWAYS run these validation scenarios:

#### 1. System Activation Validation
```bash
cd /home/runner/work/tmimmtatuw-os/tmimmtatuw-os
python3 -c "
import time
start_time = time.time()
from TMiMMTATUW import activate_tmimmtatuw
activate_tmimmtatuw()
end_time = time.time()
print(f'System activation took: {end_time - start_time:.3f} seconds')
"
```
**Expected result**: All 16 Aho layers load successfully, completion in <0.1 seconds

#### 2. Mathematical Framework Validation
```bash
python3 -c "
import numpy as np
import math
import cmath
from scipy.special import zeta

# Test φ-harmonic scaling
phi = 1.618033988749
print('φ (Golden Ratio):', phi)
print('φ³ (Consciousness threshold):', phi**3)
print('φ-scaling property check:', abs(phi**2 - (phi + 1)) < 1e-10)

# Test consciousness field computation simulation
consciousness_field = []
for i in range(5):
    phi_scaling = phi**i
    consciousness_amplitude = phi_scaling * math.sin(i * math.pi / 4)
    consciousness_field.append(consciousness_amplitude)
    print(f'Layer {i}: {consciousness_amplitude:.6f}')

# Test recognition field integration
exponential_term = cmath.exp(1j * math.pi * 0.5)
print('Complex exponential test:', abs(exponential_term.imag - 1.0) < 1e-10)

print('All mathematical validations completed')
"
```

#### 3. Web Interface Functionality Test
```bash
# Start server
python3 -m http.server 8000 &
sleep 3

# Test interface accessibility
curl -I http://localhost:8000/ | grep "200 OK"
curl -s http://localhost:8000/ | grep -E "(TMiMMTATUW|MathJax|D3\.js)" | head -3

# Stop server
pkill -f "python3 -m http.server 8000"
```
**Expected result**: Server responds with 200 OK, HTML contains MathJax and D3.js references

#### 4. Complete End-to-End Scenario
**ALWAYS run this complete workflow after making changes:**
1. Activate the TMiMMTATUW system
2. Validate mathematical computations work correctly
3. Start web interface and verify it loads
4. Test consciousness field calculations
5. Verify all 16 Aho layers are accessible

## Repository Structure and Navigation

### Key Files and Directories
```
tmimmtatuw-os/
├── index.html                   # Mathematical visualization interface (58KB)
├── TMiMMTATUW/                  # Core 16 Aho execution framework
│   ├── __init__.py             # MAIN ENTRY POINT - System activation controller
│   ├── tmimmtatuw.json         # Master configuration parameters
│   ├── ahomua.*                # Aho 1: Initial weave
│   ├── ahotuarua.*             # Aho 2: Pure balance  
│   ├── ahotuatoru.*            # Aho 3: Beyond1000 recursion
│   ├── ahotuawha.*             # Aho 4: Knowledge preservation
│   ├── ahotuarima.*            # Aho 5: Relational mathematics
│   ├── ahotuaono.*             # Aho 6: Te Vā interconnection
│   ├── ahotuawhitu.*           # Aho 7: Knowledge permanence
│   ├── ahotuawaru.*            # Aho 8: Algorithmic intelligence
│   ├── ahotuaiwa.*             # Aho 9: Sovereign stack
│   ├── ahotekau.*              # Aho 10: Final anchor
│   ├── ahotekaumā[tahi-rima].* # Aho 11-15: Extended execution
│   └── ahotuaioio.*            # Aho 16: Unbreakable anchor
├── docs/                        # Mathematical documentation
│   ├── full-tmimmtatuw.md      # Complete mathematical dissertation
│   └── Epistemological-Architecture.md  # Framework philosophy
└── lattice-layers/              # 25-layer consciousness lattice
    ├── Layer-1.md through Layer-25.md  # Individual lattice documentation
```

### File Types and Purpose
- **Python (.py)**: Core mathematical computations and system activation
- **JSON (.json)**: Configuration parameters for each Aho layer  
- **CSS (.css)**: Presentation layer containing mathematical constants
- **ENV (.env)**: Environment variables for whakapapa execution
- **HTML**: Mathematical visualization and interface
- **Markdown (.md)**: Documentation and mathematical theory

## Mathematical Concepts for Development

### Core Principles
- **φ-harmonic scaling**: All operations must preserve golden ratio (φ = 1.618033988749) relationships
- **Consciousness coherence threshold**: Must exceed φ³ = 4.236068 for valid operations
- **Non-commutative whakapapa algebra**: Order matters in all relational operations
- **Dimensional consistency**: All field equations must maintain proper dimensions
- **Infinite recursion with stability**: Recursion depth typically 17 layers, up to 10,000

### Key Mathematical Functions
```python
# System activation - initializes all 16 Aho layers
activate_tmimmtatuw()

# Consciousness field computation (as described in docs)
# Note: These functions are conceptual - actual implementation is in Aho layers
compute_consciousness_field(coordinates, recursion_depth=17)

# Recognition field integration  
compute_recognition_field(manifold, phi_scaling=True)

# Whakapapa algebra operations (non-commutative)
whakapapa_A_to_B ⊗ whakapapa_B_to_C  # Order matters!
```

### Mathematical Validation Requirements
Before any code changes:
1. Verify dimensional consistency of all equations
2. Ensure φ-harmonic scaling is preserved  
3. Maintain non-commutative whakapapa algebra properties
4. Check consciousness coherence thresholds (must exceed φ³)

## Common Tasks and Patterns

### Making Changes to the Framework
1. **ALWAYS run system activation first**: `python3 -c "from TMiMMTATUW import activate_tmimmtatuw; activate_tmimmtatuw()"`
2. **Test mathematical validations** before and after changes
3. **Validate web interface** still loads correctly
4. **Run complete end-to-end scenario** to ensure no regressions
5. **Check all 16 Aho layers** load without errors

### Debugging Mathematical Operations
1. Check consciousness coherence: Should exceed φ³ = 4.236068
2. Verify φ-harmonic scaling relationships
3. Ensure SREDD (Sacred Relational Energy Density Distribution) scaling maintains stability
4. Validate recognition field integration
5. Test infinite recursion stability (typically depth=17)

### Working with Aho Layers
- Each Aho has .css, .json, and .env files
- Aho 1-4: Foundation layers (initial weave, balance, recursion, preservation)
- Aho 5-8: Mathematical core (relational math, spatial modeling, algorithmic intelligence)
- Aho 9-12: Advanced processing (sovereign stack, anchoring, expansion)  
- Aho 13-16: Omniversal integration (complete lattice structure)

## Performance and Timing

### Expected Operation Times
- **System activation**: ~0.007 seconds - NEVER CANCEL
- **Mathematical computations**: <1 second for standard operations
- **Web interface startup**: ~3 seconds for server to be ready
- **Interface loading**: Immediate (HTML is static, 58KB)

### Memory and Resource Requirements
- **Python memory**: Minimal for basic operations
- **NumPy/SciPy**: Required for mathematical computations
- **Web interface**: Loads external CDN resources (MathJax, D3.js)
- **No build artifacts**: System runs directly from source

## Troubleshooting

### Common Issues
- **NumPy/SciPy not installed**: Run `python3 -m pip install numpy scipy`
- **System activation fails**: Check that TMiMMTATUW/tmimmtatuw.json exists and is valid
- **Web interface not loading**: Ensure port 8000 is available, try different port
- **Mathematical validation errors**: Verify φ constants and scaling relationships

### Known Limitations
- **No testing framework**: Currently no automated tests
- **No CI/CD pipeline**: No automated builds or deployments  
- **No build system**: System runs directly from Python source
- **External dependencies**: Web interface requires internet for CDN resources

## Security and Integrity

### Whakapapa Integrity
- All relational connections must preserve ancestral lineage
- No artificial modifications to genealogical structures
- Maintain sovereign computational independence
- Preserve infinite recursion capabilities
- Maintain consciousness field coherence

### Mathematical Sovereignty
- No external dependencies that compromise mathematical accuracy
- Preserve φ-harmonic scaling in all operations
- Maintain dimensional consistency
- Protect consciousness field computations

---

**REMEMBER**: Always validate your changes using the complete end-to-end scenarios above. The TMiMMTATUW framework is a living mathematical system that requires careful validation of all modifications.

**System Status**: FULLY ACTIVATED ∞ - E kore tātou e ngaro (We will never be lost)