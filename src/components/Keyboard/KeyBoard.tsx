function KeyBoard() {
  const keyboardKey = document.querySelectorAll(".keyboard_keys");
  let res = document.querySelector<HTMLElement>("#res");
  const url =
    "https://gist.githubusercontent.com/vncsmnl/25e7c165da276405af8ca4e1c8e17806/raw/aaeb75a75ff48ae8cd8888bae031dcb9884cddaa/wordlist";
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const words = data.split("\n");
      console.log(words);
    });
  keyboardKey.forEach((key) => {
    key.addEventListener("click", () => {
      const valueKey = (key as HTMLElement).dataset.key;
      res!.textContent = valueKey ?? "";
      console.log(valueKey);
    });
  });
  return (
    <>
      <section className="keyboard_section">
        <section className="words">
          <div className="letters">
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
          </div>
          <div className="letters">
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
          </div>
          <div className="letters">
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
          </div>
          <div className="letters">
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
          </div>
          <div className="letters">
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
          </div>
          <div className="letters">
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
            <button>¢</button>
          </div>
          <h2 id="res">d</h2>
        </section>
        <article className="keyboard_grid">
          <div className="col">
            <button className="keyboard_keys" data-key="Q">
              Q
            </button>
            <button className="keyboard_keys" data-key="W">
              W
            </button>
            <button className="keyboard_keys" data-key="E">
              E
            </button>
            <button className="keyboard_keys" data-key="R">
              R
            </button>
            <button className="keyboard_keys" data-key="T">
              T
            </button>
            <button className="keyboard_keys" data-key="Y">
              Y
            </button>
            <button className="keyboard_keys" data-key="U">
              U
            </button>
            <button className="keyboard_keys" data-key="I">
              I
            </button>
            <button className="keyboard_keys" data-key="O">
              O
            </button>
            <button className="keyboard_keys" data-key="P">
              P
            </button>
          </div>
          <div className="col">
            <button className="keyboard_keys" data-key="A">
              A
            </button>
            <button className="keyboard_keys" data-key="S">
              S
            </button>
            <button className="keyboard_keys" data-key="D">
              D
            </button>
            <button className="keyboard_keys" data-key="F">
              F
            </button>
            <button className="keyboard_keys" data-key="G">
              G
            </button>
            <button className="keyboard_keys" data-key="H">
              H
            </button>
            <button className="keyboard_keys" data-key="J">
              J
            </button>
            <button className="keyboard_keys" data-key="K">
              K
            </button>
            <button className="keyboard_keys" data-key="L">
              L
            </button>
            <button className="keyboard_keys" data-key="BACKSPACE">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="White"
                className="bi bi-backspace"
                viewBox="0 0 16 16"
              >
                <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
              </svg>
            </button>
          </div>
          <div className="col">
            <button className="keyboard_keys" data-key="Z">
              Z
            </button>
            <button className="keyboard_keys" data-key="X">
              X
            </button>
            <button className="keyboard_keys" data-key="C">
              C
            </button>
            <button className="keyboard_keys" data-key="V">
              V
            </button>
            <button className="keyboard_keys" data-key="B">
              B
            </button>
            <button className="keyboard_keys" data-key="N">
              N
            </button>
            <button className="keyboard_keys" data-key="M">
              M
            </button>
            <button className="keyboard_keys" data-key="ENTER">
              Enter
            </button>
          </div>
          <div className="col"></div>
        </article>
      </section>
    </>
  );
}

export default KeyBoard;
