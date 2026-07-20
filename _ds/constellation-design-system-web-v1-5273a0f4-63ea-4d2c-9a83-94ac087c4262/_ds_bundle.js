/* @ds-bundle: {"format":3,"namespace":"ConstellationDesignSystemWeb_5273a0","components":[],"sourceHashes":{"ui_kits/conversations-portal/data.js":"299abf953821","ui_kits/conversations-portal/screens-observer-new.jsx":"f8f117c9fa60","ui_kits/conversations-portal/screens-observer.jsx":"1d5b99806932","ui_kits/conversations-portal/screens-overview.jsx":"8d6bf65f7727","ui_kits/conversations-portal/screens-platform.jsx":"7a9f7df28b56","ui_kits/conversations-portal/screens-scenario.jsx":"e27ff0e11bf5","ui_kits/conversations-portal/screens-wizard.jsx":"935f3452c868","ui_kits/conversations-portal/shell.jsx":"e5fe144da994","ui_kits/conversations-portal/ui.jsx":"c67a47f16be9","ui_kits/zillow-web/Chrome.jsx":"fa3d8fd0a1e9","ui_kits/zillow-web/Primitives.jsx":"1ba2073e1365","ui_kits/zillow-web/PropertyCard.jsx":"f05a6023253a","ui_kits/zillow-web/Screens.jsx":"b9e6396a3ea0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ConstellationDesignSystemWeb_5273a0 = window.ConstellationDesignSystemWeb_5273a0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/conversations-portal/data.js
try { (() => {
// Mock data for the Conversations Platform — Conversational Intelligence portal
window.DATA = function () {
  const CHANNELS = {
    voice: {
      key: "voice",
      label: "Voice",
      icon: "IconMicrophoneOutline"
    },
    sms: {
      key: "sms",
      label: "SMS",
      icon: "IconMessageOutline"
    },
    email: {
      key: "email",
      label: "Email",
      icon: "IconMailOutline"
    },
    inApp: {
      key: "inApp",
      label: "In-App",
      icon: "IconAppHeartOutline"
    },
    mixedMode: {
      key: "mixedMode",
      label: "MixedMode",
      icon: "IconLayersOutline"
    }
  };
  const TRIGGERS = {
    perMessage: {
      key: "perMessage",
      label: "Per Message"
    },
    everyN: {
      key: "everyN",
      label: "Every N Messages"
    },
    endOfConvo: {
      key: "endOfConvo",
      label: "End of Conversation"
    }
  };
  // Note: On Demand and Per Turn removed as scenario trigger types (Per Message covers real-time).

  // Observer Library — reusable intelligence units
  const observers = [{
    key: "sentiment_analysis",
    name: "Sentiment Analysis",
    agentKey: "sentiment_analysis_v1",
    description: "Tracks emotional tone across the conversation and flags sentiment shifts.",
    output: "Caller expressed frustration early in the call but tone shifted positive after the rate adjustment was offered.",
    scenarioCount: 6,
    status: "active",
    updated: "3 days ago",
    owner: "intel-platform"
  }, {
    key: "call_summary",
    name: "Call Summary",
    agentKey: "call_summary_v2",
    description: "Produces a concise summary of the full conversation and its resolution.",
    output: "Customer called about a billing discrepancy on invoice #4421. Agent resolved by applying a one-time credit.",
    scenarioCount: 4,
    status: "active",
    updated: "1 week ago",
    owner: "intel-platform"
  }, {
    key: "lead_quality_score",
    name: "Lead Quality Score",
    agentKey: "lead_quality_score_v1",
    description: "Rates buyer intent and readiness based on stated budget, timeline, and pre-approval.",
    output: "High intent buyer. Actively looking in the 500-700k range. Pre-approved.",
    scenarioCount: 3,
    status: "active",
    updated: "2 days ago",
    owner: "pearl-ai"
  }, {
    key: "recommended_replies",
    name: "Recommended Replies",
    agentKey: "recommended_replies_v3",
    description: "Suggests up to three next replies for the agent based on conversation context.",
    output: "1) Confirm the tour time. 2) Offer a virtual walkthrough. 3) Ask about financing status.",
    scenarioCount: 2,
    status: "active",
    updated: "5 hours ago",
    owner: "zim"
  }, {
    key: "intent_classification",
    name: "Intent Classification",
    agentKey: "intent_classification_v1",
    description: "Classifies the primary intent of the conversation into a fixed taxonomy.",
    output: "schedule_tour",
    scenarioCount: 5,
    status: "active",
    updated: "4 days ago",
    owner: "intel-platform"
  }, {
    key: "churn_risk",
    name: "Churn Risk Signal",
    agentKey: "churn_risk_v2",
    description: "Detects language signalling dissatisfaction or likelihood to disengage.",
    output: "Medium risk — customer mentioned comparing other agents twice.",
    scenarioCount: 2,
    status: "active",
    updated: "1 day ago",
    owner: "retention"
  }, {
    key: "recording_disclosure",
    name: "Recording Disclosure",
    agentKey: "recording_disclosure_v1",
    description: "Verifies that the recording disclosure was read at the start of a call.",
    output: "Disclosure detected at 0:04.",
    scenarioCount: 1,
    status: "active",
    updated: "3 weeks ago",
    owner: "compliance"
  }, {
    key: "listing_extraction",
    name: "Listing Extraction",
    agentKey: "listing_extraction_v1",
    description: "Pulls structured listing details mentioned in an inbound email thread.",
    output: "Address: 2418 NW 58th St. Beds: 3. Asking: $650,000.",
    scenarioCount: 1,
    status: "draft",
    updated: "Just now",
    owner: "fub"
  }];

  // Scenarios
  const scenarios = [{
    key: "pearl_ai_beth_summary",
    name: "Pearl AI Beth Summary",
    channel: "voice",
    trigger: "endOfConvo",
    status: "live",
    lob: "PEARL",
    personas: ["BUYER", "AI_AGENT"],
    observers: ["call_summary", "sentiment_analysis", "lead_quality_score"],
    actions: ["eventPortal", "memory"],
    runs24h: 1284,
    lastRun: "2 min ago",
    owner: "pearl-ai",
    observerFlags: {
      call_summary: 100,
      sentiment_analysis: 100,
      lead_quality_score: 50
    },
    topic: "communications.voice.pearl_ai_beth_summary.v1",
    routing: "rules",
    conditions: [{
      name: "Feature Flag",
      value: "ZEXP scenario rollout"
    }, {
      name: "Minimum call duration",
      value: "30s"
    }, {
      name: "Minimum average transcription confidence",
      value: "0.7"
    }, {
      name: "Minimum call turns",
      value: "4"
    }],
    desc: "A Voice call with a buyer, analyzed at end of conversation."
  }, {
    key: "zim_smart_replies",
    name: "ZIM Smart Replies",
    channel: "inApp",
    trigger: "perMessage",
    status: "live",
    lob: "RENTALS",
    personas: ["RENTER", "AGENT"],
    observers: ["recommended_replies", "intent_classification"],
    actions: ["eventPortal"],
    runs24h: 8932,
    lastRun: "12 sec ago",
    owner: "zim",
    observerFlags: {
      recommended_replies: 100,
      intent_classification: 50
    },
    topic: "communications.inApp.zim_smart_replies.v1",
    routing: "explicit",
    conditions: [{
      name: "Feature Flag",
      value: "ZEXP scenario rollout"
    }, {
      name: "Minimum word count",
      value: "3"
    }],
    desc: "A ZIM conversation, analyzed on every message to produce recommended replies."
  }, {
    key: "listing_agent_email_intake",
    name: "Listing Agent Email Intake",
    channel: "email",
    trigger: "endOfConvo",
    status: "draft",
    lob: "FUB",
    personas: ["AGENT", "SELLER"],
    observers: ["listing_extraction", "call_summary"],
    actions: ["eventPortal", "webhook"],
    runs24h: 0,
    lastRun: "—",
    owner: "fub",
    topic: "communications.email.listing_agent_email_intake.v1",
    routing: "rules",
    conditions: [{
      name: "Feature Flag",
      value: "ZEXP scenario rollout"
    }, {
      name: "Minimum message count",
      value: "2"
    }, {
      name: "Minimum thread duration",
      value: "5 min"
    }],
    desc: "An inbound Email thread, analyzed at end of conversation."
  }, {
    key: "pa_churn_watch",
    name: "Premier Agent Churn Watch",
    channel: "voice",
    trigger: "perMessage",
    status: "live",
    lob: "PA",
    personas: ["AGENT", "CONSUMER"],
    observers: ["churn_risk", "sentiment_analysis"],
    actions: ["eventPortal", "webhook"],
    runs24h: 421,
    lastRun: "8 min ago",
    owner: "retention",
    topic: "communications.voice.pa_churn_watch.v1",
    routing: "rules",
    conditions: [{
      name: "Feature Flag",
      value: "ZEXP scenario rollout"
    }, {
      name: "Minimum turn word count",
      value: "5"
    }, {
      name: "Minimum confidence score",
      value: "0.65"
    }],
    desc: "A Premier Agent call, analyzed every turn to surface churn risk in real time."
  }, {
    key: "concierge_sms_qa",
    name: "Concierge SMS QA",
    channel: "sms",
    trigger: "everyN",
    status: "paused",
    lob: "PA",
    personas: ["CONCIERGE_REP", "CONSUMER"],
    observers: ["sentiment_analysis", "intent_classification"],
    actions: ["eventPortal"],
    runs24h: 0,
    lastRun: "2 days ago",
    owner: "concierge",
    topic: "communications.sms.concierge_sms_qa.v1",
    routing: "explicit",
    n: 5,
    conditions: [{
      name: "Feature Flag",
      value: "ZEXP scenario rollout"
    }, {
      name: "N",
      value: "5 messages"
    }, {
      name: "Count scope",
      value: "Consumer messages only"
    }],
    desc: "A Concierge SMS thread, sampled every 5 messages for quality assurance."
  }, {
    key: "rentals_tour_intent",
    name: "Rentals Tour Intent",
    channel: "mixedMode",
    trigger: "endOfConvo",
    status: "live",
    lob: "RENTALS",
    personas: ["RENTER", "LANDLORD"],
    observers: ["intent_classification", "call_summary", "sentiment_analysis"],
    actions: ["eventPortal", "memory"],
    runs24h: 612,
    lastRun: "1 hr ago",
    owner: "rentals",
    topic: "communications.mixedMode.rentals_tour_intent.v1",
    routing: "rules",
    conditions: [{
      name: "Feature Flag",
      value: "ZEXP scenario rollout"
    }, {
      name: "Minimum message count",
      value: "3"
    }],
    desc: "A mixed voice + text rentals conversation, analyzed at end of conversation."
  }, {
    key: "agent_call_grader",
    name: "Agent Call Grader (API)",
    channel: "voice",
    trigger: "onDemand",
    mode: "sync",
    status: "live",
    lob: "PA",
    personas: ["AGENT", "CONSUMER"],
    observers: ["call_summary", "sentiment_analysis", "intent_classification"],
    actions: ["response"],
    alsoDeliver: ["eventPortal"],
    runs24h: 196,
    lastRun: "5 min ago",
    owner: "pa-tools",
    topic: "communications.voice.agent_call_grader.v1",
    endpoint: "POST /v1/intelligence/scenarios/agent_call_grader:invoke",
    routing: "explicit",
    gateFailure: "reject",
    conditions: [{
      name: "Feature Flag",
      value: "ZEXP scenario rollout"
    }, {
      name: "Minimum call duration",
      value: "20s"
    }],
    desc: "Synchronous on-demand grading — POST a transcript, get the insights map back inline."
  }];
  const ACTIONS = {
    eventPortal: {
      key: "eventPortal",
      label: "Event Portal",
      icon: "IconLightningOutline",
      phase: "Phase 1"
    },
    webhook: {
      key: "webhook",
      label: "Webhook",
      icon: "IconLinkOutline",
      phase: "Future"
    },
    memory: {
      key: "memory",
      label: "Conversation Memory",
      icon: "IconArchiveOutline",
      phase: "Future"
    },
    response: {
      key: "response",
      label: "Inline response",
      icon: "IconReplyOutline",
      phase: "Sync"
    }
  };
  const PERSONAS = ["BUYER", "SELLER", "AGENT", "AI_AGENT", "CONSUMER", "LANDLORD", "RENTER", "CONCIERGE_REP"];
  const LOBS = ["PEARL", "RENTALS", "PA", "FUB"];
  const tenants = [{
    key: "pearl",
    label: "Pearl AI",
    sub: "pearl-ai"
  }, {
    key: "rentals",
    label: "Rentals",
    sub: "rentals-platform"
  }, {
    key: "pa",
    label: "Premier Agent",
    sub: "pa-tools"
  }, {
    key: "fub",
    label: "Follow Up Boss",
    sub: "fub"
  }];

  // Recent emitted events for the debug/overview feel
  const recentEvents = [{
    scenario: "zim_smart_replies",
    channel: "inApp",
    time: "12 sec ago",
    insights: 2,
    status: "emitted"
  }, {
    scenario: "pearl_ai_beth_summary",
    channel: "voice",
    time: "2 min ago",
    insights: 3,
    status: "emitted"
  }, {
    scenario: "rentals_tour_intent",
    channel: "mixedMode",
    time: "14 min ago",
    insights: 3,
    status: "emitted"
  }, {
    scenario: "pa_churn_watch",
    channel: "voice",
    time: "8 min ago",
    insights: 2,
    status: "emitted"
  }, {
    scenario: "zim_smart_replies",
    channel: "inApp",
    time: "31 sec ago",
    insights: 2,
    status: "skipped"
  }];
  return {
    CHANNELS,
    TRIGGERS,
    ACTIONS,
    PERSONAS,
    LOBS,
    observers,
    scenarios,
    tenants,
    recentEvents,
    observerByKey: k => observers.find(o => o.key === k),
    scenarioByKey: k => scenarios.find(s => s.key === k)
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conversations-portal/data.js", error: String((e && e.message) || e) }); }

// ui_kits/conversations-portal/screens-observer-new.jsx
try { (() => {
/* global React, CIcon, CButton, CTag, CCard, CField, CInput, PAGE */
// Observer create flow — deep-links to Switchboard Agents (SBA) and tracks agent save state
const {
  useState: useObNew,
  useEffect: useObEffect,
  useRef: useObRef
} = React;
const SBA_BASE = "https://switchboard.zillow.net/agents";
window.ObserverWizardScreen = function ObserverWizardScreen({
  onNav,
  editKey
}) {
  const editing = editKey ? window.DATA.observerByKey(editKey) : null;
  const [form, setForm] = useObNew(editing ? {
    name: editing.name,
    description: editing.description,
    output: "",
    agentSuffix: editing.agentKey.split("_").pop() || "v1"
  } : {
    name: "",
    description: "",
    output: "",
    agentSuffix: "v1"
  });
  // agent provisioning state: idle | pending | saved (existing observers already have a saved agent)
  const [agent, setAgent] = useObNew(editing ? {
    status: "saved",
    savedAt: editing.updated,
    openedKey: editing.agentKey
  } : {
    status: "idle",
    savedAt: null,
    openedKey: null
  });
  const pollRef = useObRef(null);
  const set = patch => setForm(f => ({
    ...f,
    ...patch
  }));
  const slug = (form.name || "new_observer").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  const agentKey = `${slug}_${form.agentSuffix || "v1"}`;
  const deepLink = `${SBA_BASE}/${agentKey}`;
  const defined = form.name.trim() && form.description.trim();

  // If the observer definition changes after an agent was provisioned, the agent key changes — reset save state.
  useObEffect(() => {
    if (agent.openedKey && agent.openedKey !== agentKey) {
      clearTimeout(pollRef.current);
      setAgent({
        status: "idle",
        savedAt: null,
        openedKey: null
      });
    }
  }, [agentKey]);
  function openInSBA() {
    window.open(deepLink, "_blank", "noopener");
    setAgent({
      status: "pending",
      savedAt: null,
      openedKey: agentKey
    });
    // Simulate awareness of the save happening in SBA (in production: webhook / poll on the agent record)
    clearTimeout(pollRef.current);
    pollRef.current = setTimeout(() => setAgent({
      status: "saved",
      savedAt: "just now",
      openedKey: agentKey
    }), 3500);
  }
  function checkNow() {
    // Manual re-check — resolves immediately in the prototype
    clearTimeout(pollRef.current);
    setAgent(a => ({
      ...a,
      status: "saved",
      savedAt: "just now",
      openedKey: agentKey
    }));
  }
  useObEffect(() => () => clearTimeout(pollRef.current), []);
  const saved = agent.status === "saved";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAGE,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 14,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/observers",
    onClick: e => {
      e.preventDefault();
      onNav("#/observers");
    },
    style: {
      color: "var(--gray-600)",
      fontWeight: 600,
      textDecoration: "none"
    }
  }, "Observer Library"), /*#__PURE__*/React.createElement(CIcon, {
    name: "IconChevronRightOutline",
    size: 13,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-950)",
      fontWeight: 700
    }
  }, editing ? editing.name : "New observer")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 30,
      lineHeight: "36px",
      letterSpacing: "-0.01em",
      margin: "0 0 6px"
    }
  }, editing ? "Edit observer" : "Create an observer"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--gray-600)",
      margin: "0 0 24px",
      maxWidth: 600
    }
  }, "An observer defines ", /*#__PURE__*/React.createElement("b", null, "what"), " to extract. Its Switchboard Agents (SBA) agent defines ", /*#__PURE__*/React.createElement("b", null, "how"), " \u2014 you'll configure the prompt in SBA before the observer can be created."), /*#__PURE__*/React.createElement(CCard, {
    pad: 28,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 999,
      background: "var(--blue-600)",
      color: "#fff",
      fontSize: 12,
      fontWeight: 800,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "1"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 17,
      margin: 0
    }
  }, "Define the observer")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CField, {
    label: "Observer name",
    required: true,
    hint: form.name ? `Key: ${slug}` : "Used to generate the observer key and the insights-map key."
  }, /*#__PURE__*/React.createElement(CInput, {
    value: form.name,
    onChange: e => set({
      name: e.target.value
    }),
    placeholder: "e.g. Sentiment Analysis"
  })), /*#__PURE__*/React.createElement(CField, {
    label: "Description",
    required: true,
    hint: "What single insight does this observer produce?"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: form.description,
    onChange: e => set({
      description: e.target.value
    }),
    placeholder: "Tracks emotional tone across the conversation and flags sentiment shifts.",
    style: {
      minHeight: 76,
      border: "1px solid var(--gray-300)",
      borderRadius: 8,
      padding: "10px 14px",
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      color: "var(--gray-950)",
      outline: "none",
      resize: "vertical",
      lineHeight: 1.5
    },
    onFocus: e => {
      e.target.style.borderColor = "var(--blue-600)";
      e.target.style.boxShadow = "0 0 0 3px color-mix(in oklab, var(--blue-600) 16%, transparent)";
    },
    onBlur: e => {
      e.target.style.borderColor = "var(--gray-300)";
      e.target.style.boxShadow = "none";
    }
  })))), /*#__PURE__*/React.createElement(CCard, {
    pad: 28,
    style: {
      marginBottom: 20,
      opacity: defined ? 1 : 0.55,
      pointerEvents: defined ? "auto" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 999,
      background: saved ? "var(--green-600)" : "var(--blue-600)",
      color: "#fff",
      fontSize: 12,
      fontWeight: 800,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, saved ? "✓" : "2"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 17,
      margin: 0
    }
  }, "Configure the agent in Switchboard Agents")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "var(--gray-600)",
      margin: "0 0 16px 34px"
    }
  }, "Open the agent in SBA to author its prompt. The observer can be created once the agent is saved there."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 34,
      border: "1px solid var(--gray-200)",
      borderRadius: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: "var(--gray-900)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconSparkleOutline",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700
    }
  }, "Switchboard agent"), /*#__PURE__*/React.createElement("a", {
    href: deepLink,
    target: "_blank",
    rel: "noopener",
    style: {
      fontSize: 12.5,
      color: "var(--blue-600)",
      fontFamily: "var(--font-mono)",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, agentKey, " ", /*#__PURE__*/React.createElement(CIcon, {
    name: "IconExternalOutline",
    size: 12,
    color: "var(--blue-600)"
  }))), agent.status === "idle" && /*#__PURE__*/React.createElement(CButton, {
    variant: "outlined-brand",
    iconRight: "IconExternalOutline",
    onClick: openInSBA
  }, "Open in Switchboard Agents"), agent.status === "pending" && /*#__PURE__*/React.createElement(CButton, {
    variant: "outlined-neutral",
    onClick: checkNow
  }, "Check status"), saved && /*#__PURE__*/React.createElement(CButton, {
    variant: "bare-neutral",
    iconRight: "IconExternalOutline",
    onClick: () => window.open(deepLink, "_blank", "noopener")
  }, "Reopen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 16px",
      borderTop: "1px solid var(--gray-100)",
      background: saved ? "var(--green-50)" : agent.status === "pending" ? "var(--yellow-50)" : "var(--gray-50)"
    }
  }, agent.status === "idle" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconInfoOutline",
    size: 16,
    color: "var(--gray-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--gray-600)"
    }
  }, "Agent not created yet. Open it in SBA to configure the prompt.")), agent.status === "pending" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "cap-spin",
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconReloadOutline",
    size: 16,
    color: "var(--yellow-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--yellow-700)",
      fontWeight: 600
    }
  }, "Waiting for the agent to be saved in Switchboard Agents\u2026")), saved && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconCheckmarkCircleFilled",
    variant: "filled",
    size: 16,
    color: "var(--green-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--green-700)",
      fontWeight: 600
    }
  }, "Agent saved in SBA \xB7 last saved ", agent.savedAt))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: "bare-neutral",
    onClick: () => onNav("#/observers")
  }, "Cancel"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, !saved && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--gray-500)"
    }
  }, defined ? "Save the agent in SBA to continue" : "Define the observer to continue"), /*#__PURE__*/React.createElement(CButton, {
    variant: "filled-brand",
    icon: "IconCheckmarkOutline",
    disabled: !saved,
    onClick: () => saved && onNav(editing ? `#/observers/${editing.key}` : "#/observers")
  }, editing ? "Save changes" : "Create observer"))), /*#__PURE__*/React.createElement("style", null, `@keyframes capspin{to{transform:rotate(360deg)}} .cap-spin{animation:capspin 1s linear infinite}`));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conversations-portal/screens-observer-new.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conversations-portal/screens-observer.jsx
try { (() => {
/* global React, CIcon, CButton, CStatus, CTag, CCard, CChannel, PageHead, PAGE */
// Observer Library (grid) + Observer detail
const {
  useState: useObState
} = React;
window.ObserversScreen = function ObserversScreen({
  onNav
}) {
  const D = window.DATA;
  const [q, setQ] = useObState("");
  const rows = D.observers.filter(o => !q || o.name.toLowerCase().includes(q.toLowerCase()) || o.key.includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Observer Library",
    sub: "Reusable intelligence units. Each observer is backed by an SBA agent and produces one named insight \u2014 attach it to any number of scenarios.",
    actions: /*#__PURE__*/React.createElement(CButton, {
      variant: "filled-brand",
      icon: "IconPlusOutline",
      onClick: () => onNav("#/observers/new")
    }, "New observer")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 300,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconSearchOutline",
    size: 16,
    color: "var(--gray-500)"
  })), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search observers\u2026",
    style: {
      width: "100%",
      boxSizing: "border-box",
      height: 40,
      border: "1px solid var(--gray-300)",
      borderRadius: 10,
      padding: "0 12px 0 36px",
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 16
    }
  }, rows.map(o => /*#__PURE__*/React.createElement(CCard, {
    key: o.key,
    hover: true,
    onClick: () => onNav(`#/observers/${o.key}`)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: "var(--blue-50)",
      color: "var(--blue-600)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconSparkleOutline",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.5,
      fontWeight: 700
    }
  }, o.name), /*#__PURE__*/React.createElement(CStatus, {
    status: o.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--gray-500)",
      fontFamily: "var(--font-mono)",
      marginTop: 2
    }
  }, o.key), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "var(--gray-600)",
      margin: "10px 0 0",
      lineHeight: 1.5
    }
  }, o.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: 14,
      fontSize: 12.5,
      color: "var(--gray-600)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconSparkleOutline",
    size: 14,
    color: "var(--gray-500)"
  }), o.scenarioCount, " scenarios"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconClockOutline",
    size: 14,
    color: "var(--gray-500)"
  }), o.updated))))))));
};
window.ObserverDetailScreen = function ObserverDetailScreen({
  observerKey,
  onNav
}) {
  const D = window.DATA;
  const o = D.observerByKey(observerKey);
  if (!o) return /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, "Observer not found.");
  const attached = D.scenarios.filter(s => s.observers.includes(o.key));
  return /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 14,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/observers",
    onClick: e => {
      e.preventDefault();
      onNav("#/observers");
    },
    style: {
      color: "var(--gray-600)",
      fontWeight: 600,
      textDecoration: "none"
    }
  }, "Observer Library"), /*#__PURE__*/React.createElement(CIcon, {
    name: "IconChevronRightOutline",
    size: 13,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-950)",
      fontWeight: 700
    }
  }, o.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 13,
      background: "var(--blue-50)",
      color: "var(--blue-600)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconSparkleOutline",
    size: 26
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 28,
      lineHeight: "32px",
      margin: 0
    }
  }, o.name), /*#__PURE__*/React.createElement(CStatus, {
    status: o.status
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--gray-600)",
      margin: "8px 0 0",
      maxWidth: 620
    }
  }, o.description))), /*#__PURE__*/React.createElement(CButton, {
    variant: "outlined-neutral",
    icon: "IconEditOutline",
    onClick: () => onNav(`#/observers/${o.key}/edit`)
  }, "Edit")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CCard, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 17,
      margin: "0 0 12px"
    }
  }, "Definition"), [["Observer key", o.key, true], ["SBA agent key", o.agentKey, true], ["Owner", o.owner, true]].map(([k, v, mono]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      padding: "11px 0",
      borderBottom: "1px solid var(--gray-100)",
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      flexShrink: 0,
      fontSize: 13.5,
      color: "var(--gray-600)",
      fontWeight: 600
    }
  }, k), /*#__PURE__*/React.createElement(CTag, {
    tone: "mono"
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      padding: "11px 0 0",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      flexShrink: 0,
      fontSize: 13.5,
      color: "var(--gray-600)",
      fontWeight: 600
    }
  }, "Maps to insight"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--gray-700)"
    }
  }, "Writes ", /*#__PURE__*/React.createElement(CTag, {
    tone: "mono"
  }, o.key), " into the insights map on the emitted event."))), /*#__PURE__*/React.createElement(CCard, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 17,
      margin: "0 0 10px"
    }
  }, "Sample output"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gray-50)",
      border: "1px solid var(--gray-200)",
      borderRadius: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontFamily: "var(--font-mono)",
      color: "var(--gray-500)",
      marginBottom: 6
    }
  }, "\"", o.key, "\":"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--gray-900)",
      lineHeight: 1.55,
      fontFamily: "var(--font-mono)"
    }
  }, "\"", o.output, "\""))), /*#__PURE__*/React.createElement(CCard, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: "1px solid var(--gray-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 17,
      margin: 0
    }
  }, "Attached scenarios"), /*#__PURE__*/React.createElement(CTag, null, attached.length)), attached.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 20px",
      textAlign: "center",
      color: "var(--gray-500)",
      fontSize: 14
    }
  }, "Not attached to any scenario yet."), attached.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.key,
    onClick: () => onNav(`#/scenarios/${s.key}`),
    style: {
      padding: "13px 20px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      borderBottom: "1px solid var(--gray-50)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--gray-50)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement(CChannel, {
    channel: s.channel,
    showLabel: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--gray-500)",
      fontFamily: "var(--font-mono)"
    }
  }, s.key)), /*#__PURE__*/React.createElement(CStatus, {
    status: s.status
  }), /*#__PURE__*/React.createElement(CIcon, {
    name: "IconChevronRightOutline",
    size: 16,
    color: "var(--gray-400)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CCard, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 15,
      margin: "0 0 12px"
    }
  }, "At a glance"), [["Status", o.status], ["Scenarios", String(o.scenarioCount)], ["Last updated", o.updated]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "8px 0",
      borderBottom: "1px solid var(--gray-100)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--gray-600)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      textTransform: k === "Status" ? "capitalize" : "none"
    }
  }, v)))), /*#__PURE__*/React.createElement(CCard, {
    style: {
      background: "var(--gray-900)",
      borderColor: "var(--gray-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconSparkleOutline",
    size: 18,
    color: "var(--blue-300)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--gray-50)",
      lineHeight: 1.5
    }
  }, "The observer defines ", /*#__PURE__*/React.createElement("b", null, "what"), " to extract. Its SBA agent ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--blue-300)"
    }
  }, o.agentKey), " defines ", /*#__PURE__*/React.createElement("b", null, "how"), ", using a configured prompt."))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conversations-portal/screens-observer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conversations-portal/screens-overview.jsx
try { (() => {
/* global React, CIcon, CButton, CStatus, CTag, CCard, CChannel, CSectionTitle */
// Overview dashboard + Scenarios list table
const {
  useState: useOvState
} = React;
function PageHead({
  title,
  sub,
  actions,
  breadcrumb
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, breadcrumb, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 32,
      lineHeight: "40px",
      letterSpacing: "-0.01em",
      margin: 0
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--gray-600)",
      margin: "6px 0 0",
      maxWidth: 680
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, actions)));
}
window.PageHead = PageHead;
const PAGE = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "32px 40px 80px"
};
window.PAGE = PAGE;

// ---------------- Conversation Intelligence landing ----------------
window.CIOverviewScreen = function CIOverviewScreen({
  onNav
}) {
  const D = window.DATA;
  const live = D.scenarios.filter(s => s.status === "live").length;
  const runs = D.scenarios.reduce((a, s) => a + s.runs24h, 0);
  const stats = [{
    label: "Active scenarios",
    value: live,
    of: D.scenarios.length,
    icon: "IconSparkleOutline"
  }, {
    label: "Observers in library",
    value: D.observers.length,
    icon: "IconLayersOutline"
  }, {
    label: "Insights emitted · 24h",
    value: runs.toLocaleString(),
    icon: "IconLightningOutline"
  }, {
    label: "Avg. confidence",
    value: "0.91",
    icon: "IconCheckmarkCircleOutline"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 14,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/overview",
    onClick: e => {
      e.preventDefault();
      onNav("#/overview");
    },
    style: {
      color: "var(--gray-600)",
      fontWeight: 600,
      textDecoration: "none"
    }
  }, "Platform"), /*#__PURE__*/React.createElement(CIcon, {
    name: "IconChevronRightOutline",
    size: 13,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-950)",
      fontWeight: 700
    }
  }, "Conversation Intelligence")), /*#__PURE__*/React.createElement(PageHead, {
    title: "Conversation Intelligence",
    sub: "Runs AI analysis across every conversation type \u2014 Voice, SMS, Email, In-App, MixedMode \u2014 and delivers structured insights to the systems that need them.",
    actions: /*#__PURE__*/React.createElement(CButton, {
      variant: "filled-brand",
      icon: "IconPlusOutline",
      onClick: () => onNav("#/scenarios/new")
    }, "New scenario")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 28
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(CCard, {
    key: s.label,
    pad: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: "var(--blue-50)",
      color: "var(--blue-600)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: s.icon,
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 30,
      lineHeight: "36px",
      marginTop: 14,
      fontVariantNumeric: "tabular-nums"
    }
  }, s.value, s.of && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)",
      fontSize: 18
    }
  }, " / ", s.of)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--gray-600)",
      marginTop: 2
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CCard, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px",
      borderBottom: "1px solid var(--gray-100)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 17,
      margin: 0
    }
  }, "Top scenarios by volume"), /*#__PURE__*/React.createElement("a", {
    href: "#/scenarios",
    onClick: e => {
      e.preventDefault();
      onNav("#/scenarios");
    },
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--blue-600)",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, "View all ", /*#__PURE__*/React.createElement(CIcon, {
    name: "IconChevronRightOutline",
    size: 14,
    color: "var(--blue-600)"
  }))), D.scenarios.filter(s => s.runs24h > 0).sort((a, b) => b.runs24h - a.runs24h).slice(0, 5).map(s => {
    const max = 8932;
    return /*#__PURE__*/React.createElement("div", {
      key: s.key,
      onClick: () => onNav(`#/scenarios/${s.key}`),
      style: {
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        cursor: "pointer",
        borderBottom: "1px solid var(--gray-50)"
      },
      onMouseEnter: e => e.currentTarget.style.background = "var(--gray-50)",
      onMouseLeave: e => e.currentTarget.style.background = "transparent"
    }, /*#__PURE__*/React.createElement(CChannel, {
      channel: s.channel,
      showLabel: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "var(--gray-950)"
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: "var(--gray-100)",
        borderRadius: 999,
        marginTop: 6,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${s.runs24h / max * 100}%`,
        height: "100%",
        background: "var(--blue-500)",
        borderRadius: 999
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        fontVariantNumeric: "tabular-nums",
        width: 64,
        textAlign: "right"
      }
    }, s.runs24h.toLocaleString()));
  })), /*#__PURE__*/React.createElement(CCard, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px",
      borderBottom: "1px solid var(--gray-100)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 17,
      margin: 0
    }
  }, "Recent events")), D.recentEvents.map((e, i) => {
    const sc = D.scenarioByKey(e.scenario);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderBottom: "1px solid var(--gray-50)"
      }
    }, /*#__PURE__*/React.createElement(CChannel, {
      channel: e.channel,
      showLabel: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, sc ? sc.name : e.scenario), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--gray-500)",
        fontFamily: "var(--font-mono)"
      }
    }, e.insights, " insights \xB7 ", e.time)), /*#__PURE__*/React.createElement(CStatus, {
      status: e.status
    }));
  }))));
};

// ---------------- Scenarios list ----------------
window.ScenariosScreen = function ScenariosScreen({
  onNav
}) {
  const D = window.DATA;
  const [q, setQ] = useOvState("");
  const [filter, setFilter] = useOvState("all");
  const filters = [["all", "All"], ["live", "Live"], ["draft", "Draft"], ["paused", "Paused"]];
  const rows = D.scenarios.filter(s => (filter === "all" || s.status === filter) && (!q || s.name.toLowerCase().includes(q.toLowerCase()) || s.key.includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Scenarios",
    sub: "Each scenario is a named conversation archetype \u2014 scoped to one channel and trigger, with its own observers, conditions, and actions.",
    actions: /*#__PURE__*/React.createElement(CButton, {
      variant: "filled-brand",
      icon: "IconPlusOutline",
      onClick: () => onNav("#/scenarios/new")
    }, "New scenario")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 300
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconSearchOutline",
    size: 16,
    color: "var(--gray-500)"
  })), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search scenarios\u2026",
    style: {
      width: "100%",
      boxSizing: "border-box",
      height: 40,
      border: "1px solid var(--gray-300)",
      borderRadius: 10,
      padding: "0 12px 0 36px",
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      background: "var(--gray-100)",
      padding: 4,
      borderRadius: 10
    }
  }, filters.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setFilter(k),
    style: {
      border: 0,
      background: filter === k ? "#fff" : "transparent",
      color: filter === k ? "var(--gray-950)" : "var(--gray-600)",
      fontWeight: 700,
      fontSize: 13,
      padding: "7px 14px",
      borderRadius: 7,
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      boxShadow: filter === k ? "var(--shadow-sm)" : "none"
    }
  }, l)))), /*#__PURE__*/React.createElement(CCard, {
    pad: 0
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-ui)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--gray-50)",
      textAlign: "left"
    }
  }, ["Scenario", "Channel", "Trigger", "Observers", "Status", "Runs · 24h", ""].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      padding: "11px 16px",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--gray-600)",
      borderBottom: "1px solid var(--gray-200)",
      whiteSpace: "nowrap",
      textAlign: i === 5 ? "right" : "left"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.key,
    onClick: () => onNav(`#/scenarios/${s.key}`),
    style: {
      cursor: "pointer",
      borderBottom: "1px solid var(--gray-100)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--gray-50)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: "var(--gray-950)"
    }
  }, s.name), s.mode === "sync" && /*#__PURE__*/React.createElement(CTag, {
    tone: "blue",
    icon: "IconReplyOutline"
  }, "API")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--gray-500)",
      fontFamily: "var(--font-mono)",
      marginTop: 2
    }
  }, s.key)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement(CChannel, {
    channel: s.channel
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 16px",
      fontSize: 13.5,
      color: "var(--gray-800)"
    }
  }, s.mode === "sync" ? "On-demand" : D.TRIGGERS[s.trigger].label), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 700
    }
  }, s.observers.length), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--gray-500)"
    }
  }, "attached"))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement(CStatus, {
    status: s.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 16px",
      textAlign: "right",
      fontSize: 14,
      fontWeight: 700,
      fontVariantNumeric: "tabular-nums"
    }
  }, s.runs24h ? s.runs24h.toLocaleString() : "—"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 16px",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconChevronRightOutline",
    size: 16,
    color: "var(--gray-400)"
  })))))), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "48px 0",
      textAlign: "center",
      color: "var(--gray-500)",
      fontSize: 14
    }
  }, "No scenarios match.")));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conversations-portal/screens-overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conversations-portal/screens-platform.jsx
try { (() => {
/* global React, CIcon, CButton, CStatus, CTag, CCard, PageHead, PAGE */
// Platform-wide overview — the home across all product surfaces
window.PlatformOverviewScreen = function PlatformOverviewScreen({
  onNav
}) {
  const D = window.DATA;
  const ciRuns = D.scenarios.reduce((a, s) => a + s.runs24h, 0);
  const ciLive = D.scenarios.filter(s => s.status === "live").length;
  const surfaces = [{
    key: "convapi",
    title: "Conversations API",
    route: "#/conversations-api",
    status: "live",
    icon: "IconMessageOutline",
    desc: "Create and manage conversations across Voice, SMS, Email, and In-App.",
    stats: [["Conversations · 24h", "48.2k"], ["Channels", "5"]],
    cta: "Open"
  }, {
    key: "ci",
    title: "Conversation Intelligence",
    route: "#/intelligence",
    status: "live",
    icon: "IconSparkleOutline",
    desc: "Run AI analysis across conversations and deliver structured insights downstream.",
    stats: [["Scenarios live", `${ciLive} / ${D.scenarios.length}`], ["Insights · 24h", ciRuns.toLocaleString()]],
    cta: "Open"
  }, {
    key: "memory",
    title: "Conversation Memory",
    route: "#/memory",
    status: "soon",
    icon: "IconArchiveOutline",
    desc: "Build persistent, longitudinal customer profiles from conversation insights over time.",
    stats: [["Profiles", "—"], ["Status", "Future"]],
    cta: "Learn more"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Platform overview",
    sub: "The single front door for the Conversations Platform. Configure, monitor, and debug conversational experiences across every product surface."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 28
    }
  }, [{
    label: "Conversations · 24h",
    value: "48.2k",
    icon: "IconMessageOutline",
    trend: "+6.4%"
  }, {
    label: "Insights emitted · 24h",
    value: ciRuns.toLocaleString(),
    icon: "IconLightningOutline",
    trend: "+12%"
  }, {
    label: "Active scenarios",
    value: `${ciLive} / ${D.scenarios.length}`,
    icon: "IconSparkleOutline"
  }, {
    label: "Platform uptime",
    value: "99.98%",
    icon: "IconCheckmarkCircleOutline"
  }].map(s => /*#__PURE__*/React.createElement(CCard, {
    key: s.label,
    pad: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: "var(--blue-50)",
      color: "var(--blue-600)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: s.icon,
    size: 18
  })), s.trend && /*#__PURE__*/React.createElement(CTag, {
    tone: "blue",
    icon: "IconTrendingOutline"
  }, s.trend)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 30,
      lineHeight: "36px",
      marginTop: 14,
      fontVariantNumeric: "tabular-nums"
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--gray-600)",
      marginTop: 2
    }
  }, s.label)))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 18,
      margin: "0 0 14px"
    }
  }, "Product surfaces"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16,
      marginBottom: 28
    }
  }, surfaces.map(p => /*#__PURE__*/React.createElement(CCard, {
    key: p.key,
    hover: true,
    onClick: () => onNav(p.route),
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 11,
      background: p.status === "soon" ? "var(--gray-100)" : "var(--blue-50)",
      color: p.status === "soon" ? "var(--gray-500)" : "var(--blue-600)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: p.icon,
    size: 22
  })), p.status === "soon" ? /*#__PURE__*/React.createElement(CTag, null, "Soon") : /*#__PURE__*/React.createElement(CStatus, {
    status: "live"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 17,
      marginBottom: 4
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "var(--gray-600)",
      margin: "0 0 16px",
      lineHeight: 1.5,
      flex: 1
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      paddingTop: 14,
      borderTop: "1px solid var(--gray-100)"
    }
  }, p.stats.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      fontVariantNumeric: "tabular-nums"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--gray-500)"
    }
  }, k))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: 13,
      fontWeight: 700,
      color: "var(--blue-600)"
    }
  }, p.cta, " ", /*#__PURE__*/React.createElement(CIcon, {
    name: "IconChevronRightOutline",
    size: 14,
    color: "var(--blue-600)"
  }))))))), /*#__PURE__*/React.createElement(CCard, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px",
      borderBottom: "1px solid var(--gray-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 17,
      margin: 0
    }
  }, "Recent intelligence activity"), /*#__PURE__*/React.createElement("a", {
    href: "#/intelligence",
    onClick: e => {
      e.preventDefault();
      onNav("#/intelligence");
    },
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--blue-600)",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, "Go to Intelligence ", /*#__PURE__*/React.createElement(CIcon, {
    name: "IconChevronRightOutline",
    size: 14,
    color: "var(--blue-600)"
  }))), D.recentEvents.map((e, i) => {
    const sc = D.scenarioByKey(e.scenario);
    const ch = D.CHANNELS[e.channel];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderBottom: "1px solid var(--gray-50)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 8,
        background: "var(--blue-50)",
        color: "var(--blue-600)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(CIcon, {
      name: ch.icon,
      size: 14
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 700
      }
    }, sc ? sc.name : e.scenario), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--gray-500)",
        fontFamily: "var(--font-mono)"
      }
    }, e.insights, " insights \xB7 ", e.time)), /*#__PURE__*/React.createElement(CStatus, {
      status: e.status
    }));
  })));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conversations-portal/screens-platform.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conversations-portal/screens-scenario.jsx
try { (() => {
/* global React, CIcon, CButton, CStatus, CTag, CCard, CChannel, PageHead, PAGE */
// Scenario detail / config — channel, trigger, observers, conditions, actions, routing
const {
  useState: useScState
} = React;
function Breadcrumb({
  items,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 14,
      fontSize: 13
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(CIcon, {
    name: "IconChevronRightOutline",
    size: 13,
    color: "var(--gray-400)"
  }), it.route ? /*#__PURE__*/React.createElement("a", {
    href: it.route,
    onClick: e => {
      e.preventDefault();
      onNav(it.route);
    },
    style: {
      color: "var(--gray-600)",
      fontWeight: 600,
      textDecoration: "none"
    }
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-950)",
      fontWeight: 700
    }
  }, it.label))));
}
function InfoRow({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      padding: "12px 0",
      borderBottom: "1px solid var(--gray-100)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      flexShrink: 0,
      fontSize: 13.5,
      color: "var(--gray-600)",
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 14,
      color: "var(--gray-950)"
    }
  }, children));
}
window.ScenarioDetailScreen = function ScenarioDetailScreen({
  scenarioKey,
  onNav
}) {
  const D = window.DATA;
  const s = D.scenarioByKey(scenarioKey);
  const [tab, setTab] = useScState("config");
  const [flags, setFlags] = useScState(() => {
    const init = {};
    (s ? s.observers : []).forEach(k => {
      init[k] = s.observerFlags && s.observerFlags[k] != null ? s.observerFlags[k] : 100;
    });
    return init;
  });
  if (!s) return /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, "Scenario not found.");
  const insights = {};
  s.observers.forEach(k => {
    const o = D.observerByKey(k);
    if (o) insights[o.key] = o.output;
  });
  const sync = s.mode === "sync";
  const tabs = sync ? [["config", "Configuration"], ["observers", "Observers"], ["api", "API"]] : [["config", "Configuration"], ["observers", "Observers"], ["event", "Emitted event"]];
  return /*#__PURE__*/React.createElement("div", {
    style: PAGE
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    onNav: onNav,
    items: [{
      label: "Scenarios",
      route: "#/scenarios"
    }, {
      label: s.name
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 30,
      lineHeight: "36px",
      letterSpacing: "-0.01em",
      margin: 0
    }
  }, s.name), /*#__PURE__*/React.createElement(CStatus, {
    status: s.status
  }), sync && /*#__PURE__*/React.createElement(CTag, {
    tone: "blue",
    icon: "IconReplyOutline"
  }, "On-demand API")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--gray-500)",
      fontFamily: "var(--font-mono)",
      marginTop: 6
    }
  }, s.key)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: "outlined-neutral",
    icon: "IconEditOutline",
    onClick: () => onNav(`#/scenarios/${s.key}/edit`)
  }, "Edit"), /*#__PURE__*/React.createElement(CButton, {
    variant: "outlined-neutral",
    icon: "IconMoreOutline"
  }, ""))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--gray-600)",
      margin: "0 0 20px",
      maxWidth: 720
    }
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      borderBottom: "1px solid var(--gray-200)",
      marginBottom: 24
    }
  }, tabs.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      border: 0,
      background: "transparent",
      padding: "10px 16px",
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      fontWeight: 700,
      color: tab === k ? "var(--blue-700)" : "var(--gray-600)",
      borderBottom: tab === k ? "2px solid var(--blue-600)" : "2px solid transparent",
      cursor: "pointer",
      marginBottom: -1
    }
  }, l))), tab === "config" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CCard, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 17,
      margin: "0 0 4px"
    }
  }, "What & when"), /*#__PURE__*/React.createElement(InfoRow, {
    label: "Invocation mode"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: sync ? "IconReplyOutline" : "IconLightningOutline",
    size: 16,
    color: "var(--gray-700)"
  }), sync ? "On-demand API (synchronous)" : "Event-driven (asynchronous)")), /*#__PURE__*/React.createElement(InfoRow, {
    label: "Channel"
  }, /*#__PURE__*/React.createElement(CChannel, {
    channel: s.channel
  })), sync ? /*#__PURE__*/React.createElement(InfoRow, {
    label: "Endpoint"
  }, /*#__PURE__*/React.createElement(CTag, {
    tone: "mono"
  }, s.endpoint)) : /*#__PURE__*/React.createElement(InfoRow, {
    label: "Trigger"
  }, D.TRIGGERS[s.trigger].label, s.n ? ` (N = ${s.n})` : ""), /*#__PURE__*/React.createElement(InfoRow, {
    label: "Line of business"
  }, /*#__PURE__*/React.createElement(CTag, {
    tone: "blue"
  }, s.lob)), sync ? /*#__PURE__*/React.createElement(InfoRow, {
    label: "On gate failure"
  }, s.gateFailure === "reject" ? "Reject (422)" : "Return empty (200)") : /*#__PURE__*/React.createElement(InfoRow, {
    label: "Routing"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: s.routing === "explicit" ? "IconKeyOutline" : "IconFilterOutline",
    size: 16,
    color: "var(--gray-700)"
  }), s.routing === "explicit" ? "Explicit key" : "Rules-based")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      padding: "12px 0 0",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      flexShrink: 0,
      fontSize: 13.5,
      color: "var(--gray-600)",
      fontWeight: 600
    }
  }, "Participant personas"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, s.personas.map(p => /*#__PURE__*/React.createElement(CTag, {
    key: p,
    tone: "mono"
  }, p))))), /*#__PURE__*/React.createElement(CCard, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 17,
      margin: 0
    }
  }, "Conditions"), /*#__PURE__*/React.createElement(CTag, {
    icon: "IconFilterOutline"
  }, s.conditions.length, " gates")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--gray-600)",
      margin: "0 0 12px"
    }
  }, "Quality gates evaluated before any observer runs. Low-signal conversations are skipped here."), s.conditions.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "11px 0",
      borderTop: i ? "1px solid var(--gray-100)" : "none"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconCheckmarkCircleOutline",
    size: 18,
    color: "var(--green-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 600
    }
  }, c.name), /*#__PURE__*/React.createElement(CTag, {
    tone: "mono"
  }, c.value)))), /*#__PURE__*/React.createElement(CCard, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 17,
      margin: "0 0 4px"
    }
  }, "Actions"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--gray-600)",
      margin: "0 0 12px"
    }
  }, "Where the insights map is delivered after observers run. Actions fan out in parallel."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, s.actions.map(a => {
    const act = D.ACTIONS[a];
    return /*#__PURE__*/React.createElement("div", {
      key: a,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: 14,
        border: "1px solid var(--gray-200)",
        borderRadius: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 9,
        background: "var(--blue-50)",
        color: "var(--blue-600)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(CIcon, {
      name: act.icon,
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        fontWeight: 700
      }
    }, act.label), a === "eventPortal" && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--gray-500)",
        fontFamily: "var(--font-mono)",
        marginTop: 2
      }
    }, s.topic), a === "webhook" && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--gray-500)",
        marginTop: 2
      }
    }, "POST to configured HTTPS endpoint"), a === "memory" && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--gray-500)",
        marginTop: 2
      }
    }, "Persist to participant memory profile")), /*#__PURE__*/React.createElement(CTag, {
      tone: act.phase === "Phase 1" ? "blue" : "neutral"
    }, act.phase));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CCard, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 15,
      margin: "0 0 12px"
    }
  }, "Activity"), [["Runs · 24h", s.runs24h ? s.runs24h.toLocaleString() : "—"], ["Last run", s.lastRun], ["Owner", s.owner]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "8px 0",
      borderBottom: "1px solid var(--gray-100)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--gray-600)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      fontFamily: k === "Owner" ? "var(--font-mono)" : "var(--font-ui)"
    }
  }, v)))), /*#__PURE__*/React.createElement(CCard, {
    style: {
      background: "var(--blue-50)",
      borderColor: "var(--blue-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconInfoOutline",
    size: 18,
    color: "var(--blue-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--blue-900)",
      lineHeight: 1.5
    }
  }, "This scenario emits to the ", /*#__PURE__*/React.createElement("b", null, "Event Portal"), " on a read-only topic derived from its channel and key. Downstream systems subscribe to consume results."))))), tab === "observers" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: "12px 16px",
      marginBottom: 14,
      borderRadius: 12,
      background: "var(--blue-50)",
      border: "1px solid var(--blue-200)"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconLightningOutline",
    size: 18,
    color: "var(--blue-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--blue-900)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", null, "Per-observer ZEXP rollout"), " is scoped to this scenario. The same observer can run at a different rollout in another scenario \u2014 these settings live here, not on the shared observer.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, s.observers.map(k => {
    const o = D.observerByKey(k);
    const val = flags[k];
    const opts = [["off", "Off", 0], ["50", "50%", 50], ["100", "100%", 100]];
    return /*#__PURE__*/React.createElement(CCard, {
      key: k
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 10,
        background: "var(--blue-50)",
        color: "var(--blue-600)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(CIcon, {
      name: "IconSparkleOutline",
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        cursor: "pointer"
      },
      onClick: () => onNav(`#/observers/${k}`)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 700
      }
    }, o.name), /*#__PURE__*/React.createElement(CTag, {
      tone: "mono"
    }, o.key)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: "var(--gray-600)",
        marginTop: 3
      }
    }, o.description)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 6,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--gray-500)"
      }
    }, /*#__PURE__*/React.createElement(CIcon, {
      name: "IconLightningOutline",
      size: 12,
      color: "var(--gray-500)"
    }), " ZEXP rollout"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 3,
        background: "var(--gray-100)",
        padding: 3,
        borderRadius: 9
      }
    }, opts.map(([key, label, num]) => {
      const on = String(val) === String(num);
      return /*#__PURE__*/React.createElement("button", {
        key: key,
        onClick: () => setFlags(f => ({
          ...f,
          [k]: num
        })),
        style: {
          border: 0,
          cursor: "pointer",
          fontFamily: "var(--font-ui)",
          fontSize: 12.5,
          fontWeight: 700,
          padding: "6px 12px",
          borderRadius: 7,
          background: on ? "#fff" : "transparent",
          color: on ? num === 0 ? "var(--gray-700)" : "var(--blue-700)" : "var(--gray-600)",
          boxShadow: on ? "var(--shadow-sm)" : "none"
        }
      }, label);
    })))));
  }))), tab === "event" && /*#__PURE__*/React.createElement(CCard, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 18px",
      borderBottom: "1px solid var(--gray-100)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconLightningOutline",
    size: 18,
    color: "var(--blue-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      fontFamily: "var(--font-mono)"
    }
  }, s.topic), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(CTag, {
    tone: "blue"
  }, "Phase 1")), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 20,
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      lineHeight: 1.6,
      color: "var(--gray-800)",
      overflowX: "auto",
      background: "var(--gray-50)"
    }
  }, JSON.stringify({
    scenarioKey: s.key,
    channel: s.channel,
    trigger: s.trigger,
    insights
  }, null, 2))), tab === "api" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CCard, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 18px",
      borderBottom: "1px solid var(--gray-100)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconReplyOutline",
    size: 18,
    color: "var(--blue-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      fontFamily: "var(--font-mono)"
    }
  }, s.endpoint), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(CTag, {
    tone: "blue"
  }, "Synchronous")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--gray-500)",
      marginBottom: 8
    }
  }, "Request"), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      lineHeight: 1.6,
      color: "var(--gray-800)",
      overflowX: "auto",
      background: "var(--gray-50)",
      borderRadius: 10
    }
  }, JSON.stringify({
    conversation: {
      channel: s.channel,
      transcript: "<full transcript or messages>",
      participants: s.personas
    }
  }, null, 2)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--gray-500)",
      margin: "18px 0 8px"
    }
  }, "Response \xB7 200"), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      lineHeight: 1.6,
      color: "var(--gray-800)",
      overflowX: "auto",
      background: "var(--gray-50)",
      borderRadius: 10
    }
  }, JSON.stringify({
    scenarioKey: s.key,
    insights
  }, null, 2)))), /*#__PURE__*/React.createElement(CCard, {
    style: {
      background: "var(--blue-50)",
      borderColor: "var(--blue-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconInfoOutline",
    size: 18,
    color: "var(--blue-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--blue-900)",
      lineHeight: 1.5
    }
  }, "Observers run ", /*#__PURE__*/React.createElement("b", null, "inline"), ", so response latency scales with the number attached (", s.observers.length, " here). On a failed condition gate this scenario is configured to ", /*#__PURE__*/React.createElement("b", null, s.gateFailure === "reject" ? "reject with 422" : "return an empty 200"), ".", s.alsoDeliver && s.alsoDeliver.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, " Results are also delivered to ", s.alsoDeliver.map(a => D.ACTIONS[a].label).join(", "), "."))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conversations-portal/screens-scenario.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conversations-portal/screens-wizard.jsx
try { (() => {
/* global React, CIcon, CButton, CTag, CCard, CChannel, CField, CInput, PAGE */
// Scenario create/edit wizard — step-by-step
const {
  useState: useWzState
} = React;
const STEPS = ["Basics", "Conditions", "Observers", "Actions", "Review"];
window.ScenarioWizardScreen = function ScenarioWizardScreen({
  onNav,
  editKey
}) {
  const D = window.DATA;
  const editing = editKey ? D.scenarioByKey(editKey) : null;
  const [step, setStep] = useWzState(0);
  const [form, setForm] = useWzState(() => editing ? {
    name: editing.name,
    channel: editing.channel,
    trigger: editing.trigger,
    observers: [...editing.observers],
    actions: [...editing.actions],
    routing: editing.routing,
    lob: editing.lob,
    personas: [...editing.personas],
    conds: {},
    mode: editing.mode || "async",
    gateFailure: editing.gateFailure || "skip",
    alsoDeliver: [...(editing.alsoDeliver || [])]
  } : {
    name: "",
    channel: "voice",
    trigger: "endOfConvo",
    observers: [],
    actions: ["eventPortal"],
    routing: "explicit",
    lob: "PEARL",
    personas: [],
    conds: {},
    mode: "async",
    gateFailure: "skip",
    alsoDeliver: []
  });
  const set = patch => setForm(f => ({
    ...f,
    ...patch
  }));
  const toggle = (key, val) => setForm(f => ({
    ...f,
    [key]: f[key].includes(val) ? f[key].filter(x => x !== val) : [...f[key], val]
  }));
  const sync = form.mode === "sync";
  const slug = (form.name || "untitled_scenario").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  const canNext = step !== 0 || form.name && form.channel && form.trigger;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAGE,
      maxWidth: 920
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 14,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/scenarios",
    onClick: e => {
      e.preventDefault();
      onNav("#/scenarios");
    },
    style: {
      color: "var(--gray-600)",
      fontWeight: 600,
      textDecoration: "none"
    }
  }, "Scenarios"), /*#__PURE__*/React.createElement(CIcon, {
    name: "IconChevronRightOutline",
    size: 13,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-950)",
      fontWeight: 700
    }
  }, editing ? `Edit · ${editing.name}` : "New scenario")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 30,
      lineHeight: "36px",
      letterSpacing: "-0.01em",
      margin: "0 0 24px"
    }
  }, editing ? "Edit scenario" : "Create a scenario"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 28
    }
  }, STEPS.map((label, i) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => i < step && setStep(i),
    style: {
      flex: 1,
      textAlign: "left",
      border: 0,
      background: "transparent",
      cursor: i < step ? "pointer" : "default",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 999,
      background: i <= step ? "var(--blue-600)" : "var(--gray-200)",
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 999,
      fontSize: 10.5,
      fontWeight: 800,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: i < step ? "var(--blue-600)" : i === step ? "var(--blue-50)" : "var(--gray-100)",
      color: i < step ? "#fff" : i === step ? "var(--blue-700)" : "var(--gray-500)",
      border: i === step ? "1px solid var(--blue-600)" : "none"
    }
  }, i < step ? "✓" : i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: i <= step ? "var(--gray-950)" : "var(--gray-500)"
    }
  }, label))))), /*#__PURE__*/React.createElement(CCard, {
    pad: 28
  }, step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CField, {
    label: "Invocation mode",
    required: true,
    hint: "Event-driven scenarios emit results asynchronously. On-demand scenarios are invoked via API and return results inline."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [["async", "IconLightningOutline", "Event-driven", "Runs automatically on conversation events and emits results to the Event Portal."], ["sync", "IconReplyOutline", "On-demand API", "Invoked synchronously via API call. Observers run inline and the insights map is the response."]].map(([k, ic, t, d]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => set({
      mode: k,
      routing: k === "sync" ? "explicit" : form.routing
    }),
    style: {
      textAlign: "left",
      padding: 16,
      borderRadius: 12,
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      border: form.mode === k ? "2px solid var(--blue-600)" : "1px solid var(--gray-300)",
      background: form.mode === k ? "var(--blue-50)" : "#fff"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: ic,
    size: 20,
    color: form.mode === k ? "var(--blue-600)" : "var(--gray-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      marginTop: 8
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--gray-600)",
      marginTop: 4,
      lineHeight: 1.5
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--gray-100)"
    }
  }), /*#__PURE__*/React.createElement(CField, {
    label: "Scenario name",
    required: true,
    hint: form.name ? `Key: ${slug}` : "A human-readable archetype name. The key is auto-generated."
  }, /*#__PURE__*/React.createElement(CInput, {
    value: form.name,
    onChange: e => set({
      name: e.target.value
    }),
    placeholder: "e.g. Pearl AI Beth Summary"
  })), /*#__PURE__*/React.createElement(CField, {
    label: "Channel",
    required: true,
    hint: "Each scenario is scoped to a single conversation type."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 8
    }
  }, Object.values(D.CHANNELS).map(c => /*#__PURE__*/React.createElement("button", {
    key: c.key,
    onClick: () => set({
      channel: c.key
    }),
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      padding: "16px 8px",
      borderRadius: 12,
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      border: form.channel === c.key ? "2px solid var(--blue-600)" : "1px solid var(--gray-300)",
      background: form.channel === c.key ? "var(--blue-50)" : "#fff"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: c.icon,
    size: 22,
    color: form.channel === c.key ? "var(--blue-600)" : "var(--gray-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: form.channel === c.key ? "var(--blue-700)" : "var(--gray-800)"
    }
  }, c.label))))), !sync && /*#__PURE__*/React.createElement(CField, {
    label: "Trigger",
    required: true,
    hint: "Determines the firing cadence for all observers attached to this scenario."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, Object.values(D.TRIGGERS).map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    onClick: () => set({
      trigger: t.key
    }),
    style: {
      padding: "10px 16px",
      borderRadius: 999,
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      fontSize: 13.5,
      fontWeight: 700,
      border: form.trigger === t.key ? "2px solid var(--blue-600)" : "1px solid var(--gray-300)",
      background: form.trigger === t.key ? "var(--blue-50)" : "#fff",
      color: form.trigger === t.key ? "var(--blue-700)" : "var(--gray-800)"
    }
  }, t.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--gray-100)"
    }
  }), sync ? /*#__PURE__*/React.createElement(CField, {
    label: "Invocation endpoint",
    hint: "Callers POST a conversation payload to this endpoint and receive the insights map in the response."
  }, /*#__PURE__*/React.createElement(CInput, {
    mono: true,
    value: `POST /v1/intelligence/scenarios/${slug}:invoke`,
    onChange: () => {},
    style: {
      background: "var(--gray-50)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      marginTop: 10,
      padding: 14,
      borderRadius: 12,
      background: "var(--blue-50)",
      border: "1px solid var(--blue-200)"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconKeyOutline",
    size: 16,
    color: "var(--blue-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--blue-900)",
      lineHeight: 1.5
    }
  }, "On-demand scenarios are addressed ", /*#__PURE__*/React.createElement("b", null, "explicitly"), " by key in the API path \u2014 no routing rules are evaluated."))) : /*#__PURE__*/React.createElement(CField, {
    label: "Routing",
    required: true,
    hint: "How the platform matches an incoming conversation to this scenario."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [["explicit", "IconKeyOutline", "Explicit key", "Producer tags the conversation with this scenario key at creation. Deterministic and fast."], ["rules", "IconFilterOutline", "Rules-based", "Match on line of business + participant personas when no explicit key is set."]].map(([k, ic, t, d]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => set({
      routing: k
    }),
    style: {
      textAlign: "left",
      padding: 16,
      borderRadius: 12,
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      border: form.routing === k ? "2px solid var(--blue-600)" : "1px solid var(--gray-300)",
      background: form.routing === k ? "var(--blue-50)" : "#fff"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: ic,
    size: 20,
    color: form.routing === k ? "var(--blue-600)" : "var(--gray-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      marginTop: 8
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--gray-600)",
      marginTop: 4,
      lineHeight: 1.5
    }
  }, d))))), !sync && form.routing === "rules" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CField, {
    label: "Line of business"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, D.LOBS.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => set({
      lob: l
    }),
    style: {
      padding: "9px 16px",
      borderRadius: 999,
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 700,
      border: form.lob === l ? "2px solid var(--blue-600)" : "1px solid var(--gray-300)",
      background: form.lob === l ? "var(--blue-50)" : "#fff",
      color: form.lob === l ? "var(--blue-700)" : "var(--gray-800)"
    }
  }, l)))), /*#__PURE__*/React.createElement(CField, {
    label: "Participant personas",
    hint: "The scenario matches conversations containing these participants."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, D.PERSONAS.map(p => {
    const on = form.personas.includes(p);
    return /*#__PURE__*/React.createElement("button", {
      key: p,
      onClick: () => toggle("personas", p),
      style: {
        padding: "7px 12px",
        borderRadius: 8,
        cursor: "pointer",
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        fontWeight: 600,
        border: on ? "2px solid var(--blue-600)" : "1px solid var(--gray-300)",
        background: on ? "var(--blue-50)" : "#fff",
        color: on ? "var(--blue-700)" : "var(--gray-700)"
      }
    }, p);
  })))), !sync && form.routing === "explicit" && /*#__PURE__*/React.createElement(CField, {
    label: "Scenario key",
    hint: "Producers pass this on conversation creation or as loki call metadata."
  }, /*#__PURE__*/React.createElement(CInput, {
    mono: true,
    value: `scenarioKey: "${slug}"`,
    onChange: () => {}
  }))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 18,
      margin: "0 0 4px"
    }
  }, "Attach observers"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--gray-600)",
      margin: "0 0 18px"
    }
  }, "Pick reusable intelligence units from the library. Each produces one named insight."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, D.observers.filter(o => o.status === "active").map(o => {
    const on = form.observers.includes(o.key);
    return /*#__PURE__*/React.createElement("div", {
      key: o.key,
      onClick: () => toggle("observers", o.key),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: 16,
        borderRadius: 12,
        cursor: "pointer",
        border: on ? "2px solid var(--blue-600)" : "1px solid var(--gray-200)",
        background: on ? "var(--blue-50)" : "#fff"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: 6,
        border: on ? "none" : "1.5px solid var(--gray-400)",
        background: on ? "var(--blue-600)" : "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, on && /*#__PURE__*/React.createElement(CIcon, {
      name: "IconCheckmarkOutline",
      size: 13,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        fontWeight: 700
      }
    }, o.name), /*#__PURE__*/React.createElement(CTag, {
      tone: "mono"
    }, o.key)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--gray-600)",
        marginTop: 3
      }
    }, o.description)));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("#/observers/new"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      marginTop: 12,
      padding: 16,
      borderRadius: 12,
      border: "1.5px dashed var(--gray-300)",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      color: "var(--blue-600)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: "var(--blue-50)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconPlusOutline",
    size: 16,
    color: "var(--blue-600)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, "Create new observer"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--gray-500)",
      fontWeight: 500
    }
  }, "\u2014 add a new intelligence unit to the library"))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 18,
      margin: "0 0 4px"
    }
  }, "Conditions"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--gray-600)",
      margin: "0 0 18px"
    }
  }, "Optional quality gates for ", /*#__PURE__*/React.createElement("b", null, D.CHANNELS[form.channel].label, sync ? " · on-demand" : ` × ${D.TRIGGERS[form.trigger].label}`), ". Enable only the gates you want \u2014 ", sync ? "conversations that fail an enabled gate are handled per the behavior below." : "conversations that fail an enabled gate are skipped before any AI runs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, conditionsFor(form.channel, form.trigger).map((c, i) => {
    const on = form.conds[c.name] !== undefined ? form.conds[c.name] : !!c.on;
    return /*#__PURE__*/React.createElement("div", {
      key: c.name,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: 16,
        borderRadius: 12,
        border: on ? "1px solid var(--gray-300)" : "1px solid var(--gray-200)",
        background: on ? "#fff" : "var(--gray-50)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => set({
        conds: {
          ...form.conds,
          [c.name]: !on
        }
      }),
      "aria-label": "Toggle condition",
      style: {
        width: 40,
        height: 24,
        borderRadius: 999,
        border: 0,
        cursor: "pointer",
        flexShrink: 0,
        padding: 0,
        background: on ? "var(--blue-600)" : "var(--gray-300)",
        position: "relative",
        transition: "background .15s"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 2,
        left: on ? 18 : 2,
        width: 20,
        height: 20,
        borderRadius: 999,
        background: "#fff",
        transition: "left .15s",
        boxShadow: "0 1px 2px rgba(0,0,0,.25)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        fontWeight: 700,
        color: on ? "var(--gray-950)" : "var(--gray-600)"
      }
    }, c.name), c.kind === "ff" && /*#__PURE__*/React.createElement(CTag, {
      tone: "blue",
      icon: "IconLightningOutline"
    }, "ZEXP")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--gray-600)",
        marginTop: 2
      }
    }, c.desc)), on && (c.kind === "ff" ? /*#__PURE__*/React.createElement(CInput, {
      mono: true,
      value: c.default,
      onChange: () => {},
      style: {
        width: 200,
        height: 38
      }
    }) : /*#__PURE__*/React.createElement(CInput, {
      value: c.default,
      onChange: () => {},
      style: {
        width: 130,
        height: 38
      }
    })));
  })), sync && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: "24px",
      fontWeight: 700,
      color: "var(--gray-950)",
      marginBottom: 4
    }
  }, "On gate failure"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--gray-600)",
      margin: "0 0 10px"
    }
  }, "Because this scenario is synchronous, decide what the API returns when an enabled gate isn't met."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [["skip", "Return empty (200)", "Respond 200 with an empty insights map. Observers are not run."], ["reject", "Reject (422)", "Respond 422 so the caller knows the conversation didn't qualify."]].map(([k, t, d]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => set({
      gateFailure: k
    }),
    style: {
      textAlign: "left",
      padding: 14,
      borderRadius: 12,
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      border: form.gateFailure === k ? "2px solid var(--blue-600)" : "1px solid var(--gray-300)",
      background: form.gateFailure === k ? "var(--blue-50)" : "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: form.gateFailure === k ? "var(--blue-700)" : "var(--gray-950)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--gray-600)",
      marginTop: 4,
      lineHeight: 1.5
    }
  }, d)))))), step === 3 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 18,
      margin: "0 0 4px"
    }
  }, "Actions"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--gray-600)",
      margin: "0 0 18px"
    }
  }, sync ? "The insights map is returned inline in the API response. You can also fan out to other destinations." : "Where insights are delivered. Actions fan out in parallel — pick one or more."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, sync && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: 16,
      borderRadius: 12,
      border: "2px solid var(--blue-600)",
      background: "var(--blue-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: "var(--blue-600)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconReplyOutline",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700
    }
  }, "Inline response"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--gray-600)",
      marginTop: 2
    }
  }, "The insights map is the HTTP response body. Always on for on-demand scenarios.")), /*#__PURE__*/React.createElement(CTag, {
    tone: "blue"
  }, "Required")), sync && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--gray-500)",
      margin: "8px 0 2px"
    }
  }, "Also deliver to"), Object.values(D.ACTIONS).filter(a => a.key !== "response").map(a => {
    const list = sync ? form.alsoDeliver : form.actions;
    const on = list.includes(a.key);
    const locked = a.phase !== "Phase 1";
    return /*#__PURE__*/React.createElement("div", {
      key: a.key,
      onClick: () => !locked && set(sync ? {
        alsoDeliver: on ? form.alsoDeliver.filter(x => x !== a.key) : [...form.alsoDeliver, a.key]
      } : {
        actions: on ? form.actions.filter(x => x !== a.key) : [...form.actions, a.key]
      }),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: 16,
        borderRadius: 12,
        cursor: locked ? "not-allowed" : "pointer",
        opacity: locked ? 0.55 : 1,
        border: on ? "2px solid var(--blue-600)" : "1px solid var(--gray-200)",
        background: on ? "var(--blue-50)" : "#fff"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 9,
        background: on ? "var(--blue-600)" : "var(--gray-100)",
        color: on ? "#fff" : "var(--gray-600)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(CIcon, {
      name: a.icon,
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        fontWeight: 700
      }
    }, a.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--gray-500)",
        marginTop: 2,
        fontFamily: a.key === "eventPortal" ? "var(--font-mono)" : "var(--font-ui)"
      }
    }, a.key === "eventPortal" ? `communications.${form.channel}.${slug}.v1` : a.key === "webhook" ? "POST to your HTTPS endpoint" : "Persist to participant memory profile")), /*#__PURE__*/React.createElement(CTag, {
      tone: a.phase === "Phase 1" ? "blue" : "neutral"
    }, a.phase));
  }))), step === 4 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 18,
      margin: "0 0 16px"
    }
  }, "Review"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, (sync ? [["Name", form.name || "—"], ["Key", slug], ["Mode", "On-demand API (sync)"], ["Channel", D.CHANNELS[form.channel].label], ["Observers", `${form.observers.length} attached`], ["On gate failure", form.gateFailure === "reject" ? "Reject (422)" : "Return empty (200)"], ["Returns", "Inline response" + (form.alsoDeliver.length ? ` + ${form.alsoDeliver.map(a => D.ACTIONS[a].label).join(", ")}` : "")], ["Endpoint", `POST /v1/intelligence/scenarios/${slug}:invoke`]] : [["Name", form.name || "—"], ["Key", slug], ["Mode", "Event-driven (async)"], ["Channel", D.CHANNELS[form.channel].label], ["Trigger", D.TRIGGERS[form.trigger].label], ["Observers", `${form.observers.length} attached`], ["Actions", form.actions.map(a => D.ACTIONS[a].label).join(", ")], ["Routing", form.routing === "explicit" ? "Explicit key" : `Rules · ${form.lob}`], ["Topic", `communications.${form.channel}.${slug}.v1`]]).map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: 14,
      border: "1px solid var(--gray-200)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--gray-500)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      marginTop: 4,
      fontFamily: k === "Key" || k === "Topic" || k === "Endpoint" ? "var(--font-mono)" : "var(--font-ui)",
      wordBreak: "break-all"
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 28,
      paddingTop: 20,
      borderTop: "1px solid var(--gray-100)"
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: "bare-neutral",
    onClick: () => step === 0 ? onNav("#/scenarios") : setStep(step - 1)
  }, step === 0 ? "Cancel" : "Back"), step < STEPS.length - 1 ? /*#__PURE__*/React.createElement(CButton, {
    variant: "filled-brand",
    iconRight: "IconChevronRightOutline",
    disabled: !canNext,
    onClick: () => canNext && setStep(step + 1)
  }, "Continue") : /*#__PURE__*/React.createElement(CButton, {
    variant: "filled-brand",
    icon: "IconCheckmarkOutline",
    onClick: () => onNav(editing ? `#/scenarios/${editing.key}` : "#/scenarios")
  }, editing ? "Save changes" : "Create scenario"))));
};
function conditionsFor(channel, trigger) {
  const FF = {
    name: "Feature Flag",
    desc: "Gate rollout via the Zillow Experiments (ZEXP) platform",
    default: "ci_scenario_rollout",
    kind: "ff",
    on: true
  };
  const isVoice = channel === "voice";
  if (isVoice && trigger === "perMessage") return [FF, {
    name: "Minimum turn word count",
    desc: "Ignore very short turns (filler, acknowledgements)",
    default: "5"
  }, {
    name: "Minimum confidence score",
    desc: "Ignore low-quality transcription turns",
    default: "0.65"
  }];
  if (isVoice) return [FF, {
    name: "Minimum call duration",
    desc: "Ignore very short calls that lack substance",
    default: "30s"
  }, {
    name: "Minimum average transcription confidence",
    desc: "Ensure transcript quality",
    default: "0.7"
  }, {
    name: "Minimum call turns",
    desc: "Ignore one-sided conversations",
    default: "4"
  }];
  if (trigger === "perMessage") return [FF, {
    name: "Minimum word count",
    desc: "Ignore very short messages",
    default: "3"
  }];
  if (trigger === "everyN") return [FF, {
    name: "N",
    desc: "How many messages constitute a cycle",
    default: "5"
  }, {
    name: "Count scope",
    desc: "All / consumer-only / agent-only messages",
    default: "All"
  }];
  return [FF, {
    name: "Minimum message count",
    desc: "Ignore very short threads",
    default: "2"
  }, {
    name: "Minimum thread duration",
    desc: "Ensure meaningful back-and-forth",
    default: "5 min"
  }];
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conversations-portal/screens-wizard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conversations-portal/shell.jsx
try { (() => {
/* global React, CIcon */
// App shell: left product nav + top bar with tenant switcher.
const {
  useState: useShellState
} = React;
const NAV = [{
  type: "section",
  label: "Platform"
}, {
  key: "overview",
  label: "Overview",
  icon: "IconGridOutline",
  route: "#/overview"
}, {
  type: "section",
  label: "Products"
}, {
  key: "convapi",
  label: "Conversations API",
  icon: "IconMessageOutline",
  route: "#/conversations-api",
  stub: true
}, {
  key: "ci",
  label: "Conversation Intelligence",
  icon: "IconSparkleOutline",
  route: "#/intelligence",
  children: [{
    key: "intelligence",
    label: "Overview",
    route: "#/intelligence"
  }, {
    key: "scenarios",
    label: "Scenarios",
    route: "#/scenarios"
  }, {
    key: "observers",
    label: "Observer Library",
    route: "#/observers"
  }]
}, {
  key: "memory",
  label: "Conversation Memory",
  icon: "IconArchiveOutline",
  route: "#/memory",
  stub: true,
  badge: "Soon"
}, {
  type: "section",
  label: "Workspace"
}, {
  key: "settings",
  label: "Settings",
  icon: "IconSettingsOutline",
  route: "#/settings",
  stub: true
}];
function navItemActive(route, current) {
  if (route === "#/intelligence") return current === "#/intelligence";
  if (route === "#/scenarios") return current.startsWith("#/scenario");
  if (route === "#/observers") return current.startsWith("#/observer");
  return current === route;
}
window.CShell = function CShell({
  route,
  onNav,
  children
}) {
  const [tenantOpen, setTenantOpen] = useShellState(false);
  const [tenant, setTenant] = useShellState(window.DATA.tenants[0]);
  const ciActive = route === "#/intelligence" || route.startsWith("#/scenario") || route.startsWith("#/observer");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: "var(--gray-50)",
      fontFamily: "var(--font-ui)",
      color: "var(--gray-950)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 264,
      flexShrink: 0,
      background: "#fff",
      borderRight: "1px solid var(--gray-200)",
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      top: 0,
      height: "100vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 16px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: "var(--blue-600)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconMessageOutline",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 15,
      lineHeight: "18px",
      letterSpacing: "-0.01em"
    }
  }, "Conversations", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-500)",
      fontSize: 11,
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }
  }, "Platform"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "4px 12px 20px"
    }
  }, NAV.map((item, i) => {
    if (item.type === "section") {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--gray-500)",
          padding: "16px 12px 6px"
        }
      }, item.label);
    }
    const active = navItemActive(item.route, route);
    const expanded = item.children && ciActive;
    return /*#__PURE__*/React.createElement("div", {
      key: item.key
    }, /*#__PURE__*/React.createElement("a", {
      onClick: e => {
        e.preventDefault();
        onNav(item.route);
      },
      href: item.route,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 12px",
        borderRadius: 10,
        textDecoration: "none",
        cursor: "pointer",
        marginBottom: 2,
        background: active && !item.children ? "var(--blue-50)" : "transparent",
        color: active ? "var(--blue-700)" : "var(--gray-800)",
        fontWeight: active ? 700 : 600,
        fontSize: 14
      },
      onMouseEnter: e => {
        if (!(active && !item.children)) e.currentTarget.style.background = "var(--gray-50)";
      },
      onMouseLeave: e => {
        if (!(active && !item.children)) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement(CIcon, {
      name: item.icon,
      size: 18,
      color: active ? "var(--blue-600)" : "var(--gray-600)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label), item.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        color: "var(--gray-500)",
        background: "var(--gray-100)",
        padding: "2px 6px",
        borderRadius: 999
      }
    }, item.badge), item.stub && !item.badge && /*#__PURE__*/React.createElement(CIcon, {
      name: "IconLockClosedOutline",
      size: 13,
      color: "var(--gray-400)"
    })), expanded && /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 20,
        paddingLeft: 12,
        borderLeft: "1px solid var(--gray-200)",
        marginBottom: 6
      }
    }, item.children.map(c => {
      const ca = navItemActive(c.route, route);
      return /*#__PURE__*/React.createElement("a", {
        key: c.key,
        href: c.route,
        onClick: e => {
          e.preventDefault();
          onNav(c.route);
        },
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "7px 12px",
          borderRadius: 8,
          textDecoration: "none",
          fontSize: 13.5,
          cursor: "pointer",
          marginBottom: 1,
          background: ca ? "var(--blue-50)" : "transparent",
          color: ca ? "var(--blue-700)" : "var(--gray-700)",
          fontWeight: ca ? 700 : 600
        },
        onMouseEnter: e => {
          if (!ca) e.currentTarget.style.background = "var(--gray-50)";
        },
        onMouseLeave: e => {
          if (!ca) e.currentTarget.style.background = "transparent";
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1
        }
      }, c.label), c.stub && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          fontWeight: 700,
          color: "var(--gray-500)",
          background: "var(--gray-100)",
          padding: "2px 6px",
          borderRadius: 999
        }
      }, "Soon"));
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: "1px solid var(--gray-200)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      background: "var(--gray-900)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 700
    }
  }, "JC"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, "Jordan Chen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--gray-500)"
    }
  }, "Platform operator")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      flexShrink: 0,
      background: "#fff",
      borderBottom: "1px solid var(--gray-200)",
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 28px",
      position: "sticky",
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTenantOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "var(--gray-50)",
      border: "1px solid var(--gray-200)",
      borderRadius: 10,
      padding: "7px 12px",
      cursor: "pointer",
      fontFamily: "var(--font-ui)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 6,
      background: "var(--blue-600)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: 800
    }
  }, tenant.label[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "left",
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--gray-500)"
    }
  }, "Tenant"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 13.5,
      fontWeight: 700,
      color: "var(--gray-950)"
    }
  }, tenant.label)), /*#__PURE__*/React.createElement(CIcon, {
    name: "IconChevronDownOutline",
    size: 15,
    color: "var(--gray-500)"
  })), tenantOpen && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setTenantOpen(false),
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      left: 0,
      width: 240,
      background: "#fff",
      border: "1px solid var(--gray-200)",
      borderRadius: 12,
      boxShadow: "var(--shadow-md)",
      padding: 6,
      zIndex: 31
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--gray-500)",
      padding: "8px 10px 4px"
    }
  }, "Switch tenant"), window.DATA.tenants.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    onClick: () => {
      setTenant(t);
      setTenantOpen(false);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      border: 0,
      background: t.key === tenant.key ? "var(--blue-50)" : "transparent",
      borderRadius: 8,
      padding: "9px 10px",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-ui)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 6,
      background: "var(--gray-900)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: 800
    }
  }, t.label[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 13.5,
      fontWeight: 700,
      color: "var(--gray-950)"
    }
  }, t.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 11.5,
      color: "var(--gray-500)",
      fontFamily: "var(--font-mono)"
    }
  }, t.sub)), t.key === tenant.key && /*#__PURE__*/React.createElement(CIcon, {
    name: "IconCheckmarkOutline",
    size: 16,
    color: "var(--blue-600)"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 280
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconSearchOutline",
    size: 17,
    color: "var(--gray-500)"
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search scenarios, observers\u2026",
    style: {
      width: "100%",
      boxSizing: "border-box",
      height: 38,
      border: "1px solid var(--gray-200)",
      borderRadius: 10,
      padding: "0 12px 0 36px",
      fontFamily: "var(--font-ui)",
      fontSize: 13.5,
      background: "var(--gray-50)",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      border: "1px solid var(--gray-200)",
      background: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "IconNotificationOutline",
    size: 18,
    color: "var(--gray-700)"
  }))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, children)));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conversations-portal/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conversations-portal/ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// Shared UI primitives for the Conversations portal — built on Constellation tokens.
const {
  useState
} = React;
const ICON_BASE = "../../assets/icons";

// Icon rendered via CSS mask so it inherits `color` (Constellation SVGs are single-color fills)
window.CIcon = function CIcon({
  name,
  variant = "outline",
  size = 20,
  color,
  style,
  ...rest
}) {
  const url = `${ICON_BASE}/${variant}/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flexShrink: 0,
      background: color || "currentColor",
      WebkitMask: `url("${url}") center / contain no-repeat`,
      mask: `url("${url}") center / contain no-repeat`,
      ...style
    }
  }, rest));
};
window.CButton = function CButton({
  variant = "filled-brand",
  size = "md",
  icon,
  iconRight,
  children,
  onClick,
  disabled,
  style
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 14,
      lineHeight: "24px",
      gap: 6
    },
    md: {
      padding: "10px 16px",
      fontSize: 16,
      lineHeight: "24px",
      gap: 8
    },
    lg: {
      padding: "14px 16px",
      fontSize: 16,
      lineHeight: "24px",
      gap: 8
    }
  };
  const variants = {
    "filled-brand": {
      background: "var(--blue-600)",
      color: "#fff",
      border: "1px solid var(--blue-600)"
    },
    "outlined-brand": {
      background: "#fff",
      color: "var(--blue-600)",
      border: "1px solid var(--blue-600)"
    },
    "outlined-neutral": {
      background: "#fff",
      color: "var(--gray-950)",
      border: "1px solid var(--gray-300)"
    },
    "bare-neutral": {
      background: "transparent",
      color: "var(--gray-950)",
      border: "1px solid transparent"
    },
    "filled-critical": {
      background: "var(--red-600)",
      color: "#fff",
      border: "1px solid var(--red-600)"
    }
  };
  const s = sizes[size],
    v = variants[variant];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      borderRadius: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      whiteSpace: "nowrap",
      transition: "filter .12s, background .12s",
      opacity: disabled ? 0.4 : 1,
      padding: s.padding,
      fontSize: s.fontSize,
      lineHeight: s.lineHeight,
      ...v,
      ...style
    },
    onMouseEnter: e => !disabled && (e.currentTarget.style.filter = "brightness(0.94)"),
    onMouseLeave: e => e.currentTarget.style.filter = "none"
  }, icon && /*#__PURE__*/React.createElement(CIcon, {
    name: icon,
    size: size === "sm" ? 16 : 18
  }), children, iconRight && /*#__PURE__*/React.createElement(CIcon, {
    name: iconRight,
    size: size === "sm" ? 16 : 18
  }));
};

// Status / semantic pill
const STATUS_STYLES = {
  live: {
    bg: "var(--green-50)",
    fg: "var(--green-700)",
    dot: "var(--green-600)"
  },
  active: {
    bg: "var(--green-50)",
    fg: "var(--green-700)",
    dot: "var(--green-600)"
  },
  emitted: {
    bg: "var(--green-50)",
    fg: "var(--green-700)",
    dot: "var(--green-600)"
  },
  draft: {
    bg: "var(--gray-100)",
    fg: "var(--gray-700)",
    dot: "var(--gray-500)"
  },
  paused: {
    bg: "var(--yellow-50)",
    fg: "var(--yellow-700)",
    dot: "var(--yellow-500)"
  },
  skipped: {
    bg: "var(--gray-100)",
    fg: "var(--gray-600)",
    dot: "var(--gray-400)"
  }
};
window.CStatus = function CStatus({
  status
}) {
  const s = STATUS_STYLES[status] || STATUS_STYLES.draft;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: s.bg,
      color: s.fg,
      fontSize: 12,
      fontWeight: 700,
      padding: "3px 10px 3px 8px",
      borderRadius: 999,
      lineHeight: "16px",
      textTransform: "capitalize"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: s.dot
    }
  }), status);
};

// Neutral tag / chip (non-interactive)
window.CTag = function CTag({
  children,
  tone = "neutral",
  icon,
  onClick,
  style
}) {
  const tones = {
    neutral: {
      bg: "var(--gray-100)",
      fg: "var(--gray-800)"
    },
    blue: {
      bg: "var(--blue-50)",
      fg: "var(--blue-700)"
    },
    mono: {
      bg: "var(--gray-100)",
      fg: "var(--gray-700)",
      font: "var(--font-mono)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: t.bg,
      color: t.fg,
      fontSize: 12.5,
      fontWeight: 600,
      padding: "4px 10px",
      borderRadius: 8,
      lineHeight: "16px",
      fontFamily: t.font || "var(--font-ui)",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(CIcon, {
    name: icon,
    size: 13
  }), children);
};
window.CCard = function CCard({
  children,
  style,
  pad = 20,
  onClick,
  hover
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: "#fff",
      border: "1px solid var(--gray-200)",
      borderRadius: 16,
      padding: pad,
      boxShadow: hover && h ? "var(--shadow-md)" : "var(--shadow-sm)",
      transition: "box-shadow .12s, border-color .12s",
      cursor: onClick ? "pointer" : "default",
      borderColor: hover && h ? "var(--gray-300)" : "var(--gray-200)",
      ...style
    }
  }, children);
};

// Channel glyph chip
window.CChannel = function CChannel({
  channel,
  showLabel = true
}) {
  const c = window.DATA.CHANNELS[channel];
  if (!c) return null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      color: "var(--gray-800)",
      fontSize: 14,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      background: "var(--blue-50)",
      color: "var(--blue-600)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: c.icon,
    size: 15
  })), showLabel && c.label);
};
window.CField = function CField({
  label,
  hint,
  children,
  required
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: "24px",
      fontWeight: 700,
      color: "var(--gray-950)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red-600)"
    }
  }, " *")), children, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--gray-950)"
    }
  }, hint));
};
window.CInput = function CInput({
  value,
  onChange,
  placeholder,
  mono,
  style
}) {
  return /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      height: 44,
      border: "1px solid var(--gray-300)",
      borderRadius: 8,
      padding: "0 14px",
      fontFamily: mono ? "var(--font-mono)" : "var(--font-ui)",
      fontSize: 15,
      color: "var(--gray-950)",
      background: "#fff",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = "var(--blue-600)";
      e.target.style.boxShadow = "0 0 0 3px color-mix(in oklab, var(--blue-600) 16%, transparent)";
    },
    onBlur: e => {
      e.target.style.borderColor = "var(--gray-300)";
      e.target.style.boxShadow = "none";
    }
  });
};

// Section header used across detail pages
window.CSectionTitle = function CSectionTitle({
  children,
  sub,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginBottom: 16,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 20,
      lineHeight: "24px",
      margin: 0,
      color: "var(--gray-950)"
    }
  }, children), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--gray-600)",
      margin: "4px 0 0"
    }
  }, sub)), action);
};
Object.assign(window, {});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conversations-portal/ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zillow-web/Chrome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, ZButton, ZIcon, ZIcons */
const {
  useState: _useState1
} = React;
window.ZHeader = function ZHeader({
  onNav
}) {
  const link = {
    fontFamily: "var(--font-ui)",
    fontSize: 14,
    fontWeight: 600,
    color: "var(--gray-900)",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: 999,
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "12px 24px",
      borderBottom: "1px solid var(--gray-200)",
      background: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/zillow-wordmark.svg",
    style: {
      height: 28,
      color: "var(--blue-600)"
    },
    onClick: () => onNav?.("home")
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link,
    onClick: () => onNav?.("search")
  }, "Buy"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Rent"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Sell"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Home Loans"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Agent finder")), /*#__PURE__*/React.createElement("a", {
    style: link,
    onClick: () => onNav?.("saved")
  }, "Saved homes"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Sign in"));
};
window.ZChip = function ZChip({
  selected,
  applied,
  children,
  onClick,
  hasMenu
}) {
  let s = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "7px 14px",
    borderRadius: 999,
    border: "1px solid var(--gray-300)",
    background: "#fff",
    color: "var(--gray-900)",
    fontFamily: "var(--font-ui)",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    whiteSpace: "nowrap"
  };
  if (selected) s = {
    ...s,
    background: "var(--gray-900)",
    color: "#fff",
    borderColor: "var(--gray-900)"
  };
  if (applied) s = {
    ...s,
    background: "var(--blue-100)",
    borderColor: "var(--blue-300)",
    color: "var(--blue-700)"
  };
  return /*#__PURE__*/React.createElement("button", {
    style: s,
    onClick: onClick
  }, children, hasMenu && /*#__PURE__*/React.createElement(ZIcon, {
    path: ZIcons.chevDown,
    size: 14
  }));
};
window.ZInput = function ZInput({
  icon,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      color: "var(--gray-600)"
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    style: {
      height: 48,
      width: "100%",
      border: "1px solid var(--gray-300)",
      borderRadius: 8,
      padding: icon ? "0 14px 0 44px" : "0 14px",
      fontFamily: "var(--font-ui)",
      fontSize: 16,
      color: "var(--gray-900)",
      background: "#fff",
      outline: "none",
      ...rest.style
    },
    onFocus: e => e.target.style.boxShadow = "0 0 0 2px #fff, 0 0 0 4px var(--blue-400), 0 0 0 6px var(--blue-600)",
    onBlur: e => e.target.style.boxShadow = "none"
  })));
};
window.ZBadge = function ZBadge({
  variant = "default",
  children
}) {
  const v = {
    default: {
      background: "#fff",
      color: "var(--gray-900)"
    },
    showcase: {
      background: "var(--orange-500)",
      color: "#fff"
    },
    new: {
      background: "var(--blue-600)",
      color: "#fff"
    },
    openhouse: {
      background: "var(--green-600)",
      color: "#fff"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...v,
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      padding: "4px 8px",
      borderRadius: 4
    }
  }, children);
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zillow-web/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zillow-web/Primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  useState
} = React;

// ---------- Button ----------
window.ZButton = function ZButton({
  variant = "primary",
  size = "md",
  children,
  icon,
  ...rest
}) {
  const base = {
    fontFamily: "var(--font-ui)",
    fontWeight: 700,
    border: 0,
    borderRadius: 999,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "background 120ms, box-shadow 120ms, color 120ms",
    whiteSpace: "nowrap"
  };
  const sizes = {
    sm: {
      padding: "6px 14px",
      fontSize: 14,
      lineHeight: "20px"
    },
    md: {
      padding: "10px 20px",
      fontSize: 16,
      lineHeight: "24px"
    },
    lg: {
      padding: "14px 28px",
      fontSize: 18,
      lineHeight: "24px"
    }
  };
  const variants = {
    primary: {
      background: "var(--blue-600)",
      color: "#fff"
    },
    secondary: {
      background: "transparent",
      color: "var(--blue-600)",
      boxShadow: "inset 0 0 0 1.5px var(--blue-600)"
    },
    tertiary: {
      background: "transparent",
      color: "var(--blue-600)"
    },
    destructive: {
      background: "var(--red-600)",
      color: "#fff"
    },
    onDark: {
      background: "#fff",
      color: "var(--gray-900)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    }
  }, rest), icon, children);
};

// ---------- Icon (inline SVG) ----------
window.ZIcon = function ZIcon({
  path,
  size = 20,
  stroke = 1.5,
  filled = false,
  color = "currentColor",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? color : "none",
    stroke: filled ? "none" : color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), path);
};

// Icon paths (authored to match Constellation 1.5px/24 grid)
window.ZIcons = {
  home: /*#__PURE__*/React.createElement("path", {
    d: "M3.5 10.5 12 3l8.5 7.5V20a1 1 0 0 1-1 1H15v-6h-6v6H4.5a1 1 0 0 1-1-1v-9.5Z"
  }),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"
  }),
  heartFilled: /*#__PURE__*/React.createElement("path", {
    d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"
  }),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m16 16 4 4"
  })),
  menu: /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  }),
  filter: /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M7 12h10M10 18h4"
  }),
  close: /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12M18 6 6 18"
  }),
  chevDown: /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  chevRight: /*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  }),
  chevLeft: /*#__PURE__*/React.createElement("path", {
    d: "m15 6-6 6 6 6"
  }),
  location: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.5"
  })),
  share: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "6",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.2 10.9 7.6-3.8M8.2 13.1l7.6 3.8"
  })),
  bed: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 18h18M7 10V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3"
  })),
  bath: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 10V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4ZM6 18l-1 3M18 18l1 3"
  })),
  sqft: /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16v16H4zM4 8h16M8 4v16"
  }),
  camera: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "7",
    width: "18",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7l2-3h4l2 3"
  })),
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "m5 12 5 5 9-10"
  }),
  plus: /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
  }),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 7 9 6 9-6"
  }))
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zillow-web/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zillow-web/PropertyCard.jsx
try { (() => {
/* global React, ZIcon, ZIcons, ZBadge */
const {
  useState: _useStateCard
} = React;
window.ZPropertyCard = function ZPropertyCard({
  home,
  saved,
  onToggleSave,
  onClick,
  hoverLift = true
}) {
  const [hover, setHover] = _useStateCard(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "#fff",
      borderRadius: 8,
      overflow: "hidden",
      boxShadow: hover && hoverLift ? "0 6px 16px 0 rgba(17,17,22,.30)" : "0 1px 4px 0 rgba(17,17,22,.12)",
      cursor: "pointer",
      transition: "box-shadow 120ms cubic-bezier(.2,.8,.2,1)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/3",
      background: home.imgGradient || "linear-gradient(135deg,#a6d2ff,#1c50ce)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, home.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(ZBadge, {
    variant: home.badge.variant
  }, home.badge.label)), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onToggleSave?.(home.id);
    },
    style: {
      position: "absolute",
      top: 8,
      right: 8,
      width: 36,
      height: 36,
      borderRadius: 999,
      border: 0,
      background: "rgba(0,0,0,.4)",
      color: saved ? "var(--red-500)" : "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      backdropFilter: "blur(4px)"
    }
  }, /*#__PURE__*/React.createElement(ZIcon, {
    path: ZIcons.heartFilled,
    size: 20,
    filled: saved,
    color: saved ? "var(--red-500)" : "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 8,
      right: 8,
      background: "rgba(0,0,0,.55)",
      color: "#fff",
      padding: "3px 8px",
      borderRadius: 4,
      fontSize: 11,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(ZIcon, {
    path: ZIcons.camera,
    size: 12,
    color: "#fff"
  }), home.photoCount || 24)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 22,
      color: "var(--gray-900)",
      letterSpacing: "-0.01em",
      fontVariantNumeric: "tabular-nums"
    }
  }, home.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      color: "var(--gray-900)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, home.bd), " bd \xB7 ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, home.ba), " ba \xB7 ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, home.sqft), " sqft"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      color: "var(--gray-600)"
    }
  }, home.addr)));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zillow-web/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zillow-web/Screens.jsx
try { (() => {
/* global React, ZHeader, ZInput, ZIcon, ZIcons, ZButton, ZPropertyCard, ZChip, ZBadge */
const {
  useState: _useSt
} = React;
const HOMES = [{
  id: 1,
  price: "$650,000",
  bd: 3,
  ba: 2,
  sqft: "1,850",
  addr: "2418 NW 58th St, Seattle, WA",
  badge: {
    variant: "new",
    label: "New"
  },
  imgGradient: "linear-gradient(135deg,#a6d2ff,#1c50ce)",
  photoCount: 28
}, {
  id: 2,
  price: "$1,245,000",
  bd: 4,
  ba: 3,
  sqft: "2,640",
  addr: "118 Alki Ave SW, Seattle, WA",
  badge: {
    variant: "showcase",
    label: "Showcase"
  },
  imgGradient: "linear-gradient(135deg,#ffa385,#ff4d29)",
  photoCount: 54
}, {
  id: 3,
  price: "$489,000",
  bd: 2,
  ba: 1,
  sqft: "980",
  addr: "312 Boren Ave N, Seattle, WA",
  badge: {
    variant: "openhouse",
    label: "Open Sat"
  },
  imgGradient: "linear-gradient(135deg,#c1f7ac,#196100)",
  photoCount: 18
}, {
  id: 4,
  price: "$825,000",
  bd: 3,
  ba: 2.5,
  sqft: "2,100",
  addr: "706 15th Ave E, Seattle, WA",
  imgGradient: "linear-gradient(135deg,#dddde1,#535364)",
  photoCount: 32
}, {
  id: 5,
  price: "$2,100,000",
  bd: 5,
  ba: 4,
  sqft: "3,780",
  addr: "4120 E Highland Dr, Seattle, WA",
  badge: {
    variant: "showcase",
    label: "Showcase"
  },
  imgGradient: "linear-gradient(135deg,#ffd7ca,#d03c0b)",
  photoCount: 67
}, {
  id: 6,
  price: "$395,000",
  bd: 1,
  ba: 1,
  sqft: "640",
  addr: "82 Wall St #410, Seattle, WA",
  imgGradient: "linear-gradient(135deg,#e2f0ff,#5898ff)",
  photoCount: 12
}];

// ---------- HomeScreen ----------
window.ZHome = function ZHome({
  onSearch
}) {
  const [q, setQ] = _useSt("");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "80px 24px 96px",
      background: "linear-gradient(180deg,#f7f7f7 0%,#fff 100%)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 60,
      lineHeight: "64px",
      letterSpacing: "-0.01em",
      color: "var(--gray-900)",
      margin: "0 0 14px",
      textWrap: "balance"
    }
  }, "Find your way home"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 18,
      color: "var(--gray-600)",
      margin: "0 0 36px"
    }
  }, "Search 2.5 million listings across the U.S."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSearch?.(q);
    },
    style: {
      maxWidth: 640,
      margin: "0 auto",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(ZInput, {
    icon: /*#__PURE__*/React.createElement(ZIcon, {
      path: ZIcons.search,
      size: 20
    }),
    placeholder: "Enter an address, neighborhood, city, or ZIP",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      height: 56,
      fontSize: 18,
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement(ZButton, {
    variant: "primary",
    size: "lg",
    onClick: () => onSearch?.(q)
  }, "Search")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 24,
      marginTop: 24,
      fontSize: 13,
      color: "var(--gray-600)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: "var(--blue-600)",
      fontWeight: 600,
      textDecoration: "none",
      cursor: "pointer"
    },
    onClick: () => onSearch?.("")
  }, "Seattle, WA"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: "var(--blue-600)",
      fontWeight: 600,
      textDecoration: "none",
      cursor: "pointer"
    }
  }, "Portland, OR"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: "var(--blue-600)",
      fontWeight: 600,
      textDecoration: "none",
      cursor: "pointer"
    }
  }, "Denver, CO"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: "var(--blue-600)",
      fontWeight: 600,
      textDecoration: "none",
      cursor: "pointer"
    }
  }, "Austin, TX"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 24px 80px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 32,
      margin: "0 0 6px"
    }
  }, "Homes you might love"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--gray-600)",
      margin: "0 0 24px"
    }
  }, "Based on popular areas near you"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, HOMES.slice(0, 6).map(h => /*#__PURE__*/React.createElement(ZPropertyCard, {
    key: h.id,
    home: h,
    onClick: () => onSearch?.(h.addr)
  })))));
};

// ---------- SearchScreen ----------
window.ZSearch = function ZSearch({
  savedIds,
  toggleSave,
  onOpen
}) {
  const [sel, setSel] = _useSt("sale");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 24px",
      borderBottom: "1px solid var(--gray-200)",
      display: "flex",
      gap: 10,
      alignItems: "center",
      background: "#fff",
      position: "sticky",
      top: 60,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 340
    }
  }, /*#__PURE__*/React.createElement(ZInput, {
    icon: /*#__PURE__*/React.createElement(ZIcon, {
      path: ZIcons.search,
      size: 18
    }),
    value: "Seattle, WA",
    style: {
      height: 40,
      fontSize: 14,
      borderRadius: 8
    }
  })), /*#__PURE__*/React.createElement(ZChip, {
    selected: sel === "sale",
    onClick: () => setSel("sale")
  }, "For sale"), /*#__PURE__*/React.createElement(ZChip, {
    selected: sel === "rent",
    onClick: () => setSel("rent")
  }, "For rent"), /*#__PURE__*/React.createElement(ZChip, {
    selected: sel === "sold",
    onClick: () => setSel("sold")
  }, "Sold"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 24,
      background: "var(--gray-200)",
      margin: "0 4px"
    }
  }), /*#__PURE__*/React.createElement(ZChip, {
    hasMenu: true,
    applied: true
  }, "$500k \u2013 $800k"), /*#__PURE__*/React.createElement(ZChip, {
    hasMenu: true
  }, "Beds & baths"), /*#__PURE__*/React.createElement(ZChip, {
    hasMenu: true
  }, "Home type"), /*#__PURE__*/React.createElement(ZChip, {
    hasMenu: true
  }, "More"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(ZButton, {
    variant: "secondary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(ZIcon, {
      path: ZIcons.heart,
      size: 16
    })
  }, "Save search")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 620px",
      height: "calc(100vh - 121px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#eef3ee,#d6e4d3)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 800 600",
    preserveAspectRatio: "xMidYMid slice"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "800",
    height: "600",
    fill: "#e8eee4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 180 L300 100 L520 220 L800 160 L800 320 L600 420 L260 380 L0 460 Z",
    fill: "#d7e3d0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 460 L260 380 L600 420 L800 320 L800 600 L0 600 Z",
    fill: "#c9d9c0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M100 50 C200 100 260 180 400 200 S600 340 780 280",
    stroke: "#fff",
    strokeWidth: "6",
    fill: "none",
    opacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 420 C200 380 340 320 500 340 S700 420 820 480",
    stroke: "#fff",
    strokeWidth: "4",
    fill: "none",
    opacity: ".6"
  })), [{
    x: 180,
    y: 220,
    p: "$650K",
    hot: true
  }, {
    x: 320,
    y: 320,
    p: "$489K"
  }, {
    x: 440,
    y: 180,
    p: "$1.2M",
    hot: true
  }, {
    x: 540,
    y: 380,
    p: "$825K"
  }, {
    x: 620,
    y: 260,
    p: "$2.1M",
    hot: true
  }, {
    x: 260,
    y: 440,
    p: "$395K"
  }].map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      left: `${m.x / 8}%`,
      top: `${m.y / 6}%`,
      transform: "translate(-50%,-100%)",
      background: m.hot ? "var(--gray-900)" : "#fff",
      color: m.hot ? "#fff" : "var(--gray-900)",
      padding: "5px 10px",
      borderRadius: 999,
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 12,
      boxShadow: "0 2px 6px rgba(0,0,0,.2)",
      border: m.hot ? "0" : "1px solid var(--gray-300)",
      cursor: "pointer",
      fontVariantNumeric: "tabular-nums"
    }
  }, m.p)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 20,
      right: 20,
      background: "#fff",
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,.15)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      border: 0,
      borderBottom: "1px solid var(--gray-200)",
      background: "transparent",
      cursor: "pointer",
      fontSize: 20
    }
  }, "+"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      border: 0,
      background: "transparent",
      cursor: "pointer",
      fontSize: 20
    }
  }, "\u2212"))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: "auto",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 22,
      margin: 0
    }
  }, "Seattle, WA homes for sale"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--gray-600)",
      margin: "2px 0 0"
    }
  }, "1,248 results")), /*#__PURE__*/React.createElement("select", {
    style: {
      height: 36,
      border: "1px solid var(--gray-300)",
      borderRadius: 8,
      padding: "0 10px",
      fontSize: 13,
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("option", null, "Homepage"), /*#__PURE__*/React.createElement("option", null, "Newest"), /*#__PURE__*/React.createElement("option", null, "Price (low to high)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, HOMES.map(h => /*#__PURE__*/React.createElement(ZPropertyCard, {
    key: h.id,
    home: h,
    saved: savedIds.has(h.id),
    onToggleSave: toggleSave,
    onClick: () => onOpen?.(h)
  }))))));
};

// ---------- HDP ----------
window.ZHdp = function ZHdp({
  home,
  saved,
  toggleSave,
  onBack
}) {
  if (!home) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "16px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 0 14px",
      fontSize: 13,
      color: "var(--blue-600)",
      cursor: "pointer"
    },
    onClick: onBack
  }, /*#__PURE__*/React.createElement(ZIcon, {
    path: ZIcons.chevLeft,
    size: 16
  }), " Back to search"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gridTemplateRows: "300px 300px",
      gap: 4,
      borderRadius: 12,
      overflow: "hidden",
      marginBottom: 24,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridRow: "1 / 3",
      background: home.imgGradient,
      backgroundSize: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#ffd7ca,#ffa385)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#c1f7ac,#68c952)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#a6d2ff,#5898ff)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#eeeef0,#adadb6)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      position: "absolute",
      right: 12,
      bottom: 12,
      background: "rgba(0,0,0,.7)",
      color: "#fff",
      border: 0,
      borderRadius: 999,
      padding: "8px 14px",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(ZIcon, {
    path: ZIcons.camera,
    size: 14
  }), " See all 67 photos"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 360px",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 40,
      color: "var(--gray-900)",
      letterSpacing: "-0.01em",
      lineHeight: 1,
      marginBottom: 6,
      fontVariantNumeric: "tabular-nums"
    }
  }, home.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: "var(--gray-900)",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("b", null, home.bd), " bd | ", /*#__PURE__*/React.createElement("b", null, home.ba), " ba | ", /*#__PURE__*/React.createElement("b", null, home.sqft), " sqft"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "var(--gray-600)"
    }
  }, home.addr)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      border: "1px solid var(--gray-300)",
      background: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    onClick: () => toggleSave?.(home.id)
  }, /*#__PURE__*/React.createElement(ZIcon, {
    path: ZIcons.heartFilled,
    size: 20,
    filled: saved,
    color: saved ? "var(--red-500)" : "var(--gray-900)"
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      border: "1px solid var(--gray-300)",
      background: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(ZIcon, {
    path: ZIcons.share,
    size: 20
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 12,
      padding: "16px 0",
      borderTop: "1px solid var(--gray-200)",
      borderBottom: "1px solid var(--gray-200)",
      marginBottom: 24
    }
  }, [{
    i: ZIcons.bed,
    k: "Beds",
    v: home.bd
  }, {
    i: ZIcons.bath,
    k: "Baths",
    v: home.ba
  }, {
    i: ZIcons.sqft,
    k: "Sqft",
    v: home.sqft
  }, {
    i: ZIcons.home,
    k: "Type",
    v: "House"
  }].map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: "var(--gray-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(ZIcon, {
    path: x.i,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--gray-500)",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      fontWeight: 600
    }
  }, x.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--gray-900)"
    }
  }, x.v))))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 24,
      margin: "0 0 10px"
    }
  }, "What's special"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--gray-900)",
      margin: "0 0 24px"
    }
  }, "Bright 3 bed / 2 bath Craftsman in the heart of Ballard. Fully remodeled kitchen, refinished hardwoods throughout, and a private back deck that gets all-day sun. Walk to Ballard Ave, Market Street shops, and the Sunday farmers market."), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 24,
      margin: "0 0 10px"
    }
  }, "Facts & features"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px 24px",
      fontSize: 14
    }
  }, [["Year built", "1921"], ["Lot", "3,200 sqft"], ["Heating", "Forced air"], ["Parking", "2 spaces"], ["Days on Zillow", "4"], ["Price/sqft", "$351"]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid var(--gray-100)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-600)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--gray-900)"
    }
  }, v))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: 80,
      height: "fit-content"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--gray-200)",
      borderRadius: 12,
      padding: 20,
      background: "#fff",
      boxShadow: "0 1px 4px rgba(17,17,22,.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 999,
      background: "linear-gradient(135deg,#1c50ce,#0d35a0)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontFamily: "var(--font-brand)"
    }
  }, "JC"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "Jordan Chen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--gray-600)"
    }
  }, "Premier Agent \xB7 Windermere"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ZButton, {
    variant: "primary",
    size: "md",
    icon: /*#__PURE__*/React.createElement(ZIcon, {
      path: ZIcons.user,
      size: 18
    })
  }, "Request a tour"), /*#__PURE__*/React.createElement(ZButton, {
    variant: "secondary",
    size: "md",
    icon: /*#__PURE__*/React.createElement(ZIcon, {
      path: ZIcons.mail,
      size: 18
    })
  }, "Contact agent"), /*#__PURE__*/React.createElement(ZButton, {
    variant: "tertiary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(ZIcon, {
      path: ZIcons.phone,
      size: 16
    })
  }, "(206) 555-0142")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 12,
      background: "var(--blue-50)",
      borderRadius: 8,
      fontSize: 13,
      color: "var(--gray-900)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, "Get pre-approved"), " \u2014 see what you can afford with Zillow Home Loans.")))));
};

// ---------- Saved ----------
window.ZSaved = function ZSaved({
  savedIds,
  toggleSave,
  onOpen
}) {
  const homes = HOMES.filter(h => savedIds.has(h.id));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "32px 24px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 40,
      margin: "0 0 6px"
    }
  }, "Saved homes"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--gray-600)",
      margin: "0 0 24px"
    }
  }, homes.length, " ", homes.length === 1 ? "home" : "homes", " saved"), homes.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "80px 20px",
      background: "var(--gray-50)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 900,
      fontSize: 24,
      marginBottom: 6
    }
  }, "No saved homes yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gray-600)",
      marginBottom: 16
    }
  }, "Tap the heart to save any listing for later.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, homes.map(h => /*#__PURE__*/React.createElement(ZPropertyCard, {
    key: h.id,
    home: h,
    saved: true,
    onToggleSave: toggleSave,
    onClick: () => onOpen?.(h)
  }))));
};
window.HOMES = HOMES;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zillow-web/Screens.jsx", error: String((e && e.message) || e) }); }

})();
