 function computeSin() {
            try {
                // Evaluate the current expression first (allow simple expressions like 30+0)
                let expr = currentDisplay.trim();
                if (expr === '') return;
                // Use eval only for simple arithmetic; keep this minimal and controlled
                let value = eval(expr);
                // Treat the input as degrees (common for users); convert to radians
                let radians = value * Math.PI / 180;
                let result = Math.sin(radians);
                // Round small floating point noise to a reasonable number of decimals
                if (Math.abs(result) < 1e-12) result = 0;
                // Format result: show up to 10 decimal places, trim trailing zeros
                let formatted = parseFloat(result.toFixed(5)).toString();
                currentDisplay = formatted;
                document.querySelector('#display').value = currentDisplay;
            } catch (e) {
                document.querySelector('#display').value = 'Error';
                currentDisplay = '';
            }
        }