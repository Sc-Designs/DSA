function validParenthesis(s) {
  let st = [];
  let isFlag = true;

  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);

    if (ch == "(" || ch == "{" || ch == "[") {
      st.push(ch);
      continue;
    }

    if (ch == ")" || ch == "}" || ch == "]") {
      if (st.length == 0) {
        isFlag = false;
        break;
      }

      if (
        (ch == ")" && st[st.length - 1] == "(") ||
        (ch == "}" && st[st.length - 1] == "{") ||
        (ch == "]" && st[st.length - 1] == "[")
      ) {
        st.pop();
      } else {
        isFlag = false;
        break;
      }
    }
  }

  console.log(isFlag && st.length === 0 ? "Valid" : "Not Valid");
}
validParenthesis("68576{hbjgj[hvjvg]hbh}");
