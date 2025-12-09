import "./MainCards.css";
export default function Main() {
  return (
    <main>
      <div className="card supervisor">
        <h2>Supervisor</h2>
        <p>Monitors activity to identify project roadblocks</p>
        <img src="./images/icon-supervisor.svg" alt="iconSupervisor" />
      </div>

      <div className="card builder">
        <h2>Team Builder</h2>
        <p>
          Scans our talent network to create the optimal team for your project
        </p>
        <img src="./images/icon-team-builder.svg" alt="iconTeamBuilder" />
      </div>

      <div className="card karma">
        <h2>Karma</h2>
        <p>Regularly evaluates our talent to ensure quality</p>
        <img src="./images/icon-karma.svg" alt="iconKarma" />
      </div>

      <div className="card calculator">
        <h2>Calculator</h2>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src="./images/icon-calculator.svg" alt="iconCalculator" />
      </div>
    </main>
  );
}
