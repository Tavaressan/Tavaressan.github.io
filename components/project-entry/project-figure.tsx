import "./project-figure.css";

// Desenhos técnicos de cada projeto, traçados a partir dos READMEs (Fig. 01 a 03)
function Vetor() {
  return (
    <svg className="dg" viewBox="0 0 960 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <path className="lead" d="M95 150V96H107" />
      <text className="ann" x="113" y="100">skills: spec · issue-coordinator · fix-loop-agent · worktree-ship · guardian</text>
      <rect className="n" x="30" y="150" width="130" height="72" />
      <text className="lbl" x="44" y="191">Ideation</text>
      <path className="e" d="M160 186H182M174 181l8 5-8 5" />
      <rect className="n" x="182" y="150" width="130" height="72" />
      <text className="lbl" x="196" y="191">Backlog</text>
      <path className="e" d="M312 186H334M326 181l8 5-8 5" />
      <rect className="n" x="334" y="150" width="130" height="72" />
      <text className="lbl" x="348" y="182">Worktree</text>
      <text className="sub" x="348" y="204">isolated</text>
      <path className="e" d="M464 186H486M478 181l8 5-8 5" />
      <rect className="n" x="486" y="150" width="130" height="72" />
      <text className="lbl" x="500" y="182">Fix loop</text>
      <text className="sub" x="500" y="204">autonomous</text>
      <path className="e" d="M616 186H638M630 181l8 5-8 5" />
      <rect className="n" x="638" y="150" width="130" height="72" />
      <text className="lbl" x="652" y="191">Ship</text>
      <path className="e" d="M768 186H790M782 181l8 5-8 5" />
      <rect className="n" x="790" y="150" width="130" height="72" />
      <text className="lbl" x="804" y="191">Guard</text>
      <text className="ann" x="30" y="258">TypeScript on Deno · agents · skills · MCP · CLI · hooks</text>
      <rect className="tb" x="30" y="312" width="280" height="52" />
      <path className="tb" d="M30 336H310" />
      <text className="tb-t" x="42" y="329">Fig. 01 · Workflow cycle</text>
      <text className="tb-s" x="42" y="355">from the repository README</text>
    </svg>
  );
}

function Delphos() {
  return (
    <svg className="dg" viewBox="0 0 960 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect className="n" x="40" y="152" width="150" height="96" />
      <text className="lbl" x="56" y="194">Frontend</text>
      <text className="sub" x="56" y="218">Next.js</text>
      <path className="e" d="M190 200H250M242 195l8 5-8 5" />
      <rect className="n" x="250" y="152" width="180" height="96" />
      <text className="lbl" x="266" y="194">Core API</text>
      <text className="sub" x="266" y="218">Java · Spring Boot</text>
      <path className="e" d="M430 200H490M482 195l8 5-8 5" />
      <text className="ann" x="440" y="188">jobs</text>
      <rect className="n" x="490" y="152" width="150" height="96" />
      <text className="lbl" x="506" y="194">RabbitMQ</text>
      <text className="sub" x="506" y="218">queue</text>
      <path className="e" d="M640 200H680V88H720M680 200H720M680 200V312H720M712 83l8 5-8 5M712 195l8 5-8 5M712 307l8 5-8 5" />
      <rect className="n" x="720" y="60" width="200" height="56" />
      <text className="lbl" x="736" y="93">Ingestion</text>
      <rect className="n" x="720" y="172" width="200" height="56" />
      <text className="lbl" x="736" y="205">RAG</text>
      <rect className="n" x="720" y="284" width="200" height="56" />
      <text className="lbl" x="736" y="317">CrewAI · Python</text>
      <path className="e" d="M340 248V300M335 292l5 8 5-8" />
      <rect className="n" x="250" y="300" width="180" height="64" />
      <text className="lbl" x="266" y="328">PostgreSQL</text>
      <text className="sub" x="266" y="350">pgvector</text>
      <text className="ann" x="490" y="322">Rust services:</text>
      <text className="ann" x="490" y="342">parallel data processing</text>
      <rect className="tb" x="40" y="312" width="190" height="52" />
      <path className="tb" d="M40 336H230" />
      <text className="tb-t" x="52" y="329">Fig. 02 · Delphos</text>
      <text className="tb-s" x="52" y="355">from the README</text>
    </svg>
  );
}

function Cafey() {
  return (
    <svg className="dg" viewBox="0 0 960 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <path className="lead" d="M375 140V96H387" />
      <text className="ann" x="393" y="100">KiCad: electronics · FreeCAD: mechanical structure</text>
      <rect className="n" x="40" y="140" width="180" height="96" />
      <text className="lbl" x="56" y="182">Coffee maker</text>
      <text className="sub" x="56" y="206">mechanical switch</text>
      <path className="e" d="M220 188H290M282 183l8 5-8 5" />
      <text className="ann" x="232" y="176">relay</text>
      <rect className="n" x="290" y="140" width="170" height="96" />
      <text className="lbl" x="306" y="182">ESP32 module</text>
      <text className="sub" x="306" y="206">ESP-IDF · FreeRTOS</text>
      <path className="e" d="M460 188H540M532 183l8 5-8 5" />
      <text className="ann" x="476" y="176">MQTT</text>
      <rect className="n" x="540" y="140" width="170" height="96" />
      <text className="lbl" x="556" y="182">AWS IoT Core</text>
      <text className="sub" x="556" y="206">device broker</text>
      <path className="e" d="M710 188H750M742 183l8 5-8 5" />
      <rect className="n" x="750" y="140" width="170" height="96" />
      <text className="lbl" x="766" y="182">Kotlin API</text>
      <text className="sub" x="766" y="206">Spring Boot</text>
      <path className="e" d="M835 236V300M830 292l5 8 5-8" />
      <rect className="n" x="750" y="300" width="170" height="64" />
      <text className="lbl" x="766" y="337">PostgreSQL</text>
      <path className="e" d="M375 236V300" />
      <text className="ann" x="387" y="274">BLE</text>
      <rect className="n" x="290" y="300" width="170" height="64" />
      <text className="lbl" x="306" y="328">Clients</text>
      <text className="sub" x="306" y="350">multiplatform</text>
      <rect className="tb" x="40" y="312" width="220" height="52" />
      <path className="tb" d="M40 336H260" />
      <text className="tb-t" x="52" y="329">Fig. 03 · Cafey</text>
      <text className="tb-s" x="52" y="355">system outline</text>
    </svg>
  );
}

function RosaryStore() {
  return (
    <svg className="dg" viewBox="0 0 960 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect className="n" x="50" y="140" width="180" height="100" />
      <text className="lbl" x="70" y="182">Web Storefront</text>
      <text className="sub" x="70" y="206">HTML5 · CSS3</text>
      <path className="e" d="M230 190H320M312 185l8 5-8 5" />
      <text className="ann" x="245" y="178">DOM events</text>
      <rect className="n" x="320" y="140" width="190" height="100" />
      <text className="lbl" x="340" y="182">Catalog Engine</text>
      <text className="sub" x="340" y="206">Vanilla JavaScript</text>
      <path className="e" d="M510 190H600M592 185l8 5-8 5" />
      <text className="ann" x="525" y="178">cart state</text>
      <rect className="n" x="600" y="140" width="190" height="100" />
      <text className="lbl" x="620" y="182">Cart Simulation</text>
      <text className="sub" x="620" y="206">Client storage</text>
      <rect className="tb" x="50" y="312" width="240" height="52" />
      <path className="tb" d="M50 336H290" />
      <text className="tb-t" x="62" y="329">Fig. 04 · Rosary Store</text>
      <text className="tb-s" x="62" y="355">storefront & catalog engine</text>
    </svg>
  );
}

function FluxoraMaternal() {
  return (
    <svg className="dg" viewBox="0 0 960 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect className="n" x="50" y="140" width="180" height="100" />
      <text className="lbl" x="70" y="182">Clinical SPA</text>
      <text className="sub" x="70" y="206">React 18 · CSS3</text>
      <path className="e" d="M230 190H320M312 185l8 5-8 5" />
      <text className="ann" x="245" y="178">JSON REST</text>
      <rect className="n" x="320" y="140" width="190" height="100" />
      <text className="lbl" x="340" y="182">MVC Controllers</text>
      <text className="sub" x="340" y="206">PHP backend</text>
      <path className="e" d="M510 190H600M592 185l8 5-8 5" />
      <text className="ann" x="530" y="178">SQL queries</text>
      <rect className="n" x="600" y="140" width="190" height="100" />
      <text className="lbl" x="620" y="182">MySQL DB</text>
      <text className="sub" x="620" y="206">Patient records</text>
      <rect className="tb" x="50" y="312" width="260" height="52" />
      <path className="tb" d="M50 336H310" />
      <text className="tb-t" x="62" y="329">Fig. 05 · Fluxora Maternal</text>
      <text className="tb-s" x="62" y="355">clinical portal architecture</text>
    </svg>
  );
}

function GtSolar() {
  return (
    <svg className="dg" viewBox="0 0 960 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect className="n" x="50" y="140" width="180" height="100" />
      <text className="lbl" x="70" y="182">Solar Telemetry</text>
      <text className="sub" x="70" y="206">Synthetic inverters</text>
      <path className="e" d="M230 190H320M312 185l8 5-8 5" />
      <text className="ann" x="240" y="178">REST metrics</text>
      <rect className="n" x="320" y="140" width="200" height="100" />
      <text className="lbl" x="340" y="182">Core Services</text>
      <text className="sub" x="340" y="206">Java 21 · Spring Boot</text>
      <path className="e" d="M520 190H610M602 185l8 5-8 5" />
      <rect className="n" x="610" y="80" width="180" height="80" />
      <text className="lbl" x="630" y="118">PostgreSQL</text>
      <text className="sub" x="630" y="140">Timeseries JPA</text>
      <rect className="n" x="610" y="200" width="180" height="80" />
      <text className="lbl" x="630" y="238">OpenAPI</text>
      <text className="sub" x="630" y="260">Swagger docs</text>
      <path className="e" d="M520 160V120H610" />
      <path className="e" d="M520 220V240H610" />
      <rect className="tb" x="50" y="312" width="230" height="52" />
      <path className="tb" d="M50 336H280" />
      <text className="tb-t" x="62" y="329">Fig. 06 · GT Solar</text>
      <text className="tb-s" x="62" y="355">telemetry backend & API</text>
    </svg>
  );
}

function KazuTattoo() {
  return (
    <svg className="dg" viewBox="0 0 960 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect className="n" x="50" y="140" width="180" height="100" />
      <text className="lbl" x="70" y="182">Studio UI</text>
      <text className="sub" x="70" y="206">Vue.js SPA</text>
      <path className="e" d="M230 190H320M312 185l8 5-8 5" />
      <text className="ann" x="245" y="178">REST API</text>
      <rect className="n" x="320" y="140" width="200" height="100" />
      <text className="lbl" x="340" y="182">Spring Boot Core</text>
      <text className="sub" x="340" y="206">Java 21 backend</text>
      <path className="e" d="M520 160H610M602 155l8 5-8 5" />
      <rect className="n" x="610" y="90" width="190" height="80" />
      <text className="lbl" x="630" y="128">MySQL</text>
      <text className="sub" x="630" y="150">Bookings & Accounts</text>
      <path className="e" d="M520 220H610M602 215l8 5-8 5" />
      <rect className="n" x="610" y="210" width="190" height="80" />
      <text className="lbl" x="630" y="248">MongoDB</text>
      <text className="sub" x="630" y="270">Portfolios & Media</text>
      <rect className="tb" x="50" y="312" width="250" height="52" />
      <path className="tb" d="M50 336H300" />
      <text className="tb-t" x="62" y="329">Fig. 07 · Kazu Tattoo</text>
      <text className="tb-s" x="62" y="355">polyglot persistence outline</text>
    </svg>
  );
}

function UpBarber() {
  return (
    <svg className="dg" viewBox="0 0 960 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect className="n" x="40" y="90" width="180" height="80" />
      <text className="lbl" x="60" y="128">Mobile Client</text>
      <text className="sub" x="60" y="150">React Native</text>
      <rect className="n" x="40" y="210" width="180" height="80" />
      <text className="lbl" x="60" y="248">Admin Dashboard</text>
      <text className="sub" x="60" y="270">Next.js Web</text>
      <path className="e" d="M220 130H310M302 125l8 5-8 5" />
      <path className="e" d="M220 250H310M302 245l8 5-8 5" />
      <rect className="n" x="310" y="130" width="210" height="120" />
      <text className="lbl" x="330" y="178">Spring Boot API</text>
      <text className="sub" x="330" y="202">Java 21 · Docker</text>
      <path className="e" d="M520 160H620M612 155l8 5-8 5" />
      <rect className="n" x="620" y="90" width="190" height="80" />
      <text className="lbl" x="640" y="128">EFI Pay (PIX)</text>
      <text className="sub" x="640" y="150">Instant gateway</text>
      <path className="e" d="M520 220H620M612 215l8 5-8 5" />
      <rect className="n" x="620" y="210" width="190" height="80" />
      <text className="lbl" x="640" y="248">PostgreSQL</text>
      <text className="sub" x="640" y="270">Appointments & Cash</text>
      <rect className="tb" x="40" y="322" width="230" height="52" />
      <path className="tb" d="M40 346H270" />
      <text className="tb-t" x="52" y="339">Fig. 08 · UP Barber</text>
      <text className="tb-s" x="52" y="365">PIX mobile & core system</text>
    </svg>
  );
}

const FIGURES: Record<string, () => React.JSX.Element> = {
  vetor: Vetor,
  delphos: Delphos,
  cafey: Cafey,
  "rosary-store": RosaryStore,
  "fluxora-maternal": FluxoraMaternal,
  "gt-solar": GtSolar,
  "kazu-tattoo": KazuTattoo,
  "up-barber": UpBarber,
};

export function ProjectFigure({ slug }: { slug: string }) {
  const Fig = FIGURES[slug];
  return Fig ? <Fig /> : null;
}

