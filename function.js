function zeltron(file) {
     let file_variable = file.files[0];
     let file_reader = new FileReader();

     file_reader.readAsText(file_variable);

     file_reader.onload = function() {
          let file_data = file_reader.result;
          let name = [];
          let nickname = [];
          let age = [];
          let level = [];
          let rank = [];

          srttt = file_data.replace(/(\r\n|\n|\r)/gm,"");
          srttt = srttt.split(" ").join("");

          let parserer = new DOMParser();
          let datar = parserer.parseFromString(srttt,"text/xml");
          var x = datar.getElementsByTagName("name");

          for (let i = 0; i < x.length; i ++) {
               name[i] = datar.getElementsByTagName("name")[i].childNodes[0].nodeValue;
          }

          for (let j = 0; j < x.length; j ++) {
               nickname[j] = datar.getElementsByTagName("nickname")[j].childNodes[0].nodeValue;
          }

          for (let d = 0; d < x.length; d ++) {
               age[d] = datar.getElementsByTagName("age")[d].childNodes[0].nodeValue;
          }

          for (let a = 0; a < x.length; a ++) {
               level[a] = datar.getElementsByTagName("level")[a].childNodes[0].nodeValue;
          }

          for (let b = 0; b < x.length; b ++) {
               rank[b] = datar.getElementsByTagName("rank")[b].childNodes[0].nodeValue;
          }
          console.log(datar);
          let inner_html = "";
          for (let u = 0; u < x.length; u ++) {
               inner_html = inner_html + '<tr>' + '<td align = "center" class = "input">' + name[u] + '</td>' + '<td align = "center" class = "input">' + nickname[u] + '</td>' + '<td align = "center" class = "input">' + age[u] + '</td>' + '<td align = "center" class = "input">' + level[u] + '</td>' + '<td align = "center" class = "input">' + rank[u] + '</td>' + '</tr>';
          }

          document.getElementById("zeltron").innerHTML = inner_html;
          document.getElementById("zeltron55").innerHTML = file_data;
   };

   file_reader.onerror = function() {
       console.log(file_reader.error);
   };
}
