import React from "react";

export default function About(props) {
  let k = {
    backgroundColor: props.mode === "dark" ? "#586090" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <div className="accordion-body my-1" >
            TextUtils is a versatile text manipulation application designed to
            facilitate various operations on textual data. With a user-friendly
            interface, it offers several functions catering to the needs of
            writers, editors, students, and professionals alike.
            
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              1.Text Analysis
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={k}>
              TextUtils provides comprehensive text analysis tools, including
              word count, character count, sentence count, and paragraph count.
              These features help users gain insights into their text
              compositions, aiding in writing tasks, such as adhering to word
              limits or analyzing document structures.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2.Text Transformation
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body " style={k}>
              Users can transform text easily with features like changing text
              case (uppercase, lowercase, title case), removing extra spaces,
              converting text to Morse code, and reversing text. These functions
              streamline text formatting tasks and enhance readability.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            3.Text Sharing
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={k}>
              Users can easily share their text or results of text operations
              with others through various sharing options, including copying to
              the clipboard, sharing via email, or posting to social media
              platforms.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
