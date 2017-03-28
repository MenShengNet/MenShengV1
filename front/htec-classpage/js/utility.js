/**
 * Created by 王传凯 on 2017/3/27.
 */
function createXMLHttpRequest() {
    //其他非IE浏览器
    try{
        var XHR = new XMLHttpRequest();
    }
    catch (e1){
        //IE6+浏览器
        try{
            var XHR = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e2){
            //IE5浏览器
            try{
                var XHR = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e3){
                //客户端不支持AJAX
                XHR = false;
            }
        }
    }
    return XHR;
}