
    let output = document.getElementById("output");

    function appendToInput(input) {
        output.value += input;
    }

    function clearOutput() {
        output.value = "";
    }

    function calculate(){
        try {
            output.value = eval(output.value);
        } catch (e) {
            output.value = "Error";
        }
    }

