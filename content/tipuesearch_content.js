var tipuesearch = {"pages": [{'title': 'About', 'text': '四設計二甲 41023140 邱仲陞 \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'replie', 'text': '利用 Replit 執行課程倉儲的動態網頁伺服器, 從 Github 倉儲 import 後, \n  可編輯動態網頁內容, 轉為靜態後, acp 回 Github Pages, 就可以對靜態網站改版。 \n 建立 Replit 帳號 登入 Email 驗證 Replit 寄出的註冊確認電子郵件 利用 import repository, 以 cmsite 倉儲內容,建立 repl 進入 .replit 檔案設定頁面, 將 main.py 設定為啟動程式 在 shell 介面執行 git submodule update --init --recursive, 取下 cmsite 倉儲中 cmsimde 子模組檔案 在 shell 介面執行 pip install flask flask_cors bs4 lxml pelican markdown gevent, 安裝 cmsimde 所需要的模組 按下 Run, 啟動 main.py 登入 cmsite 動態網站, 修改管理者密碼, 修改標題與內容後, 以 generate_pages 將動態網頁內容轉為靜態格式 利用 Replit 中的 Version Control 功能, 將改版資料推向遠端倉儲 \n', 'tags': '', 'url': 'replie.html'}, {'title': '心得1', 'text': '老師在這週用了跟以往都不同的方式來連線到cmsimde的靜態網頁。 \n 雖然因為Replit分配給免費帳戶的容量只有500MB的關係，每個人所能夠執行的命令有限。 \n 但也足夠讓我們體驗利用Replit伺服器來架設cmsimde網站。 \n 跟以往只能用可攜來執行cmsimde來比還要簡單的多。 \n', 'tags': '', 'url': '心得1.html'}, {'title': 'stud.cycu.org', 'text': 'git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 \xa0 \xa0 \n git config --global user.name "name" \xa0 \n git config --global user.email "email" \xa0 \n git clone --recurse-submodules git@demo:mdecad2022/site-github_帳號.git s \xa0 \n git submodule update --init --recursive \xa0 \n python3 server.py \xa0 \n https://stud.cycu.org:8xxx \xa0 \n acp 放入倉儲後 \xa0 \n chmod u+x acp\xa0 \xa0 \n source acp "提交說明字串" \xa0 \n python3 server.py & \xa0 \n ps aux | grep "server.py" \xa0 \n kill -9 111919 \xa0 \n cd s, cd cmsimde, git pull origin master \xa0 \n cd .., python3 server.py \xa0 \n exit 推出 login \xa0 \n  editor2 結束  \n', 'tags': '', 'url': 'stud.cycu.org.html'}, {'title': '心得2', 'text': '這週開始，老師利用一台 Ubuntu 虛擬主機建立各學員帳號, 並且利用雙埠號派送方式 (內部為 9xxxx, 外部為 8xxxx), 讓各學員得以利用此伺服器來推送改版資料。 \n 因為replit網站給予免費帳戶只有500MB容量，所以只夠我們體驗改版標題，推上去動態網站，之後就沒有空間做其他項目了。 \n 之後 以 ssh-keygen 建立 private and public keys, 存放於 .ssh 目錄下, 以 sftp 取下 id_rsa.pub 放入 Github 後, 就可以利用 SSH 對 Github 倉儲改版.此次改版跟之前的Token不同，是利用ssh金鑰來連接靜態及動態網站，及對網頁做改版。 \n', 'tags': '', 'url': '心得2.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w6', 'text': '\n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'W8', 'text': '\n', 'tags': '', 'url': 'W8.html'}, {'title': 'w10', 'text': '\n 已知  block.prt  中 p8=59, p9=44, 請利用網際表單, 將 p8, p9 都改為 50 之後, 在瀏覽中提供新的 block_new.prt 檔案下載, 並直接在網頁上展示該零件的 STL 格式檔案. \n \n block.stl \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w12', 'text': '', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '', 'tags': '', 'url': 'w14.html'}, {'title': 'onshape', 'text': 'base \n shaft \n link \n assambly \n \n', 'tags': '', 'url': 'onshape.html'}, {'title': 'NX', 'text': 'one link robot \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': 'NX.html'}, {'title': 'Solvespace', 'text': 'two link robot \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Solvespace.html'}]};