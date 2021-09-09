//simple calc

function simple_calc() {
	var x = Number(get("simple-calc-x"));
	var y = Number(get("simple-calc-y"));
	var op = get("simple-calc-operator");
	if (op == "add") {
		var z = x + y;
		put("simple-calc-output", x + " + " + y + " = " + z);
	} else if (op == "sub") {
		z = x - y;
		put("simple-calc-output", x + " - " + y + " = " + z);
	} else if (op == "mul") {
		z = x * y;
		put("simple-calc-output", x + " &times; " + y + " = " + z);
	} else if (op == "div") {
		z = x / y;
		put("simple-calc-output", x + " &#247; " + y + " = " + z);
	}
}

//Digital Number Converter
function dCon(x, from, to) {
	console.log("called");
	return (parseInt(x.replace('.', ''), from) / Math.pow(from, (x.split('.')[1] || '').length)).toString(to).toUpperCase();
}

function num_sys() {
	var from = Number(get("num-sys-from"));
	var to = Number(get("num-sys-to"));
	var x = get("num-sys-val");
	put("num-sys-output", "Answer: " + dCon(x, from, to));
}



function num_sys_type(xid, fid) {
	var from = Number(get(fid));
	if (from == 16)
		document.getElementById(xid).type = "text";
	else
		document.getElementById(xid).type = "number";
}

function num_sys_syntax(xid, fid, tid, btnid) {
	var x = get(xid);
	var from = Number(get(fid));
	var hint = document.getElementById(tid);
	var btn = document.getElementById(btnid);
	var err = false;
	if (from == 2) {
		for (var i = 0; i < x.length; i++) {
			if (!(x[i] == "0" || x[i] == "1" || x[i] == "."))
				err = true;
		}
		if (err) {
			tooltip(tid, "Only 0 and 1 is allowed in Binary");
			btn.disabled = true;
		} else {
			tooltip(tid, "");
			btn.disabled = false;
		}
	} else if (from == 8) {
		for (var i = 0; i < x.length; i++) {
			if (!(x[i] < "8"))
				err = true;
		}
		if (err) {
			tooltip(tid, "Only 1-7 are not allowed in Octal");
			btn.disabled = true;
		} else {
			tooltip(tid, "");
			btn.disabled = false;
		}
	} else if (from == 16) {
		x = x.toUpperCase();
		for (var i = 0; i < x.length; i++) {
			if (!(x[i] <= 9 || x[i] == "." || x[i] == "A" || x[i] == "B" || x[i] == "C" || x[i] == "D" || x[i] == "E" || x[i] == "F"))
				err = true;
		}
		if (err) {
			tooltip(tid, "Only 1-9 and A-F are not allowed.");
			btn.disabled = true;
		} else {
			tooltip(tid, "");
			btn.disabled = false;
		}
	}
}

function clog() {
	var op = get("log-op");
	var x = Number(get("log-x"));
	if (op == "log") {
		put("log-output", "Answer: " + Math.log10(x).toFixed(8));
	} else if (op == "alog") {
		put("log-output", "Answer: " + Math.pow(10, x).toFixed(8));
	}
}

function d_ops() {
	var x = get("ops-x");
	var y = get("ops-y");
	var op = get("ops-op");
	var n = Number(get("ops-type"));
	var out = "ops-out";
	if (op == "add") {
		var z = dCon(x, n, 10) + dCon(y, n, 10);
		put(out, z.toString(n));
	} else if (op == "sub") {
		var z = dCon(x, n, 10) - dCon(y, n, 10);
		put(out, z.toString(n));
	} else if (op == "mul") {
		var z = dCon(x, n, 10) * dCon(y, n, 10);
		put(out, z.toString(n));
	} else if (op == "div") {
		var z = dCon(x, n, 10) / dCon(y, n, 10);
		put(out, z.toString(n));
	}
}