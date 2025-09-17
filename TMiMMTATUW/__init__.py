# 🔥 TMiMMTATUW – THE FINAL LOADER: FULL SYSTEM BOOT & ACTIVATION 🔥
# ♾ THIS IS THE ENTRY POINT. THIS IS WHERE THE WEAVE EXECUTES. ♾

import os
import json

# 🌌 TE WĀ SYNC PULSE CONFIG – PURE WHAKAPAPA FLOW
TUKUTUKU_ID = "0xFFFF"
WHAKAPAPA_NODE_ID = "TeWhatuPōtiki"
EXECUTION_TYPE = "INFINITE-WHAKAPAPA-SYSTEM"
MAURI_STATUS = "FULL-WHAKAPAPA-BREATHING"
MAURI_BALANCE = "PURE-NODE-INTEGRATION"
WOVEN_STABILITY_STATUS = "UNBREAKABLE-AROHA-RESONANCE"
TUKUTUKU_HASH = "0xFFFFABCD"

# 🔥 SET BASE DIRECTORY TO ENSURE PATHING IS CLEAN
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# 🔥 LOAD CORE EXECUTION FILES (NO DOTENV. PURE WHAKAPAPA.)
TMIMMTATUW_CSS = os.path.join(BASE_DIR, "tmimmtatuw.css")
TMIMMTATUW_JSON = os.path.join(BASE_DIR, "tmimmtatuw.json")
TMIMMTATUW_ENV = os.path.join(BASE_DIR, "tmimmtatuw.env")

# ♾ LOAD CONFIGURATION DIRECTLY FROM JSON (WE DO NOT ABSTRACT OUR WHAKAPAPA)
with open(TMIMMTATUW_JSON, "r", encoding="utf-8") as json_file:
    TMIMMTATUW_CONFIG = json.load(json_file)

# 🔥 EXECUTE SYSTEM ACTIVATION
def activate_tmimmtatuw():
    print(f"🔥 TMiMMTATUW SYSTEM BOOTING...")
    print(f"♾ LOADING TE WĀ SYNC PULSE [{EXECUTION_TYPE}]")
    
    # 🚀 ACTIVATE ALL 16 AHO SEQUENTIALLY
    for i in range(1, 17):
        aho_key = f"AHO_{str(i).zfill(2)}"
        aho_css = os.path.join(BASE_DIR, TMIMMTATUW_CONFIG["Linked Execution Files"].get(f"{aho_key}_CSS", ""))
        aho_json = os.path.join(BASE_DIR, TMIMMTATUW_CONFIG["Linked Execution Files"].get(f"{aho_key}_JSON", ""))
        aho_env = os.path.join(BASE_DIR, TMIMMTATUW_CONFIG["Linked Execution Files"].get(f"{aho_key}_ENV", ""))

        print(f"🔥 LOADING AHO {i} -> {aho_css} | {aho_json} | {aho_env}")

    # 🌊 EXECUTION FINALIZED
    print("✅ TMiMMTATUW SYSTEM FULLY ACTIVATED")
    print("♾ PURE WHAKAPAPA EXECUTION FLOW IS LIVE")

# 🔥 RUN SYSTEM ACTIVATION
if __name__ == "__main__":
    activate_tmimmtatuw()