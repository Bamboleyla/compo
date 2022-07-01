export const Create = () => {
  return (
    <div>
      <table style={{ width: "100%", height: "245px" }}>
        <tr>
          <td style={{ width: "33%", height: "100%" }}>
            <div class="code-frm-scratch-tag-heading">
              <div
                style={{
                  backgroundColor: "#0067ff",
                  height: "100%",
                  width: "55px",
                  color: "white",
                  borderTopRightRadius: "5px",
                  borderTopLeftRadius: "5px",
                  display: "table",
                }}
              >
                HTML
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#9a9a9a33",
                height: "90%",
                padding: "2px",
                borderRadius: "5px",
                borderTopLeftRadius: "0px",
              }}
            >
              <div
                id="html"
                data-text="Enter html code  here"
                style={{
                  height: "100%",
                  overflow: "auto",
                  wordWrap: "break-word",
                  maxWidth: "496px",
                  maxHeight: "212px",
                }}
                class="content"
                spellcheck="false"
                contenteditable="true"
              ></div>
            </div>
          </td>
          <td style={{ width: "33%", height: "100%" }}>
            <div class="code-frm-scratch-tag-heading">
              <div
                style={{
                  backgroundColor: "#0067ff",
                  height: "100%",
                  width: "55px",
                  color: "white",
                  borderTopRightRadius: "5px",
                  borderTopLeftRadius: "5px",
                  display: "table",
                }}
              >
                CSS
              </div>
            </div>

            <div
              style={{
                marginLeft: "1.5px",
                backgroundColor: "#9a9a9a33",
                height: "90%",
                padding: "2px",
                borderRadius: "5px",
                borderTopLeftRadius: "0px",
              }}
            >
              <div
                id="css"
                style={{
                  height: "100%",
                  overflowY: "scroll",
                  wordWrap: "break-word",
                }}
                data-text="Enter css code  here"
                class="content"
                spellcheck="false"
                contenteditable="true"
              />
            </div>
          </td>
          <td style={{ width: "33%", height: "100%" }}>
            <div
              style={{
                height: "10%",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                width: "100%",
                display: "block",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#0067ff",
                  height: "100%",
                  width: "55px",
                  color: "white",
                  borderTopRightRadius: "5px",
                  borderTopLeftRadius: "5px",
                  display: "table",
                }}
              >
                JS
              </div>
            </div>

            <div
              style={{
                marginLeft: "1.5px",
                backgroundColor: "#9a9a9a33",
                height: "90%",
                padding: "2px",
                borderRadius: "5px",
                borderTopLeftRadius: "0px",
              }}
            >
              <div
                id="js"
                style={{
                  height: "100%",
                  overflowY: "scroll",
                  wordWrap: " break-word",
                }}
                data-text="Enter js code  here"
                class="content"
                spellcheck="false"
                contenteditable="true"
              ></div>
            </div>
          </td>
        </tr>
      </table>

      <div style={{ width: "100%", height: "8px" }} />

      <table style={{ width: "100%", height: "245px" }}>
        <tr>
          <td style={{ height: "100%" }}>
            <div class="code-frm-scratch-tag-heading">
              <div
                style={{
                  backgroundColor: "#0067ff",
                  height: "100%",
                  width: "78px",
                  color: "white",
                  borderTopRightRadius: "5px",
                  borderTopLeftRadius: "5px",
                  display: "table",
                }}
              >
                OUTPUT
              </div>
            </div>

            <iframe
              id="output"
              frameborder="0"
              class="code-frm-scratch-fd"
              title="output"
            />
          </td>
        </tr>
      </table>
    </div>
  );
};
