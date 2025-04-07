"use strict";
!function(e){function n(){}function t(e,n){return function(){e.apply(n,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(e,this)}function i(e,n){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(n):(e._handled=!0,void o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null===t)return void(1===e._state?r:u)(n.promise,e._value);var o;try{o=t(e._value)}catch(i){return void u(n.promise,i)}r(n.promise,o)}))}function r(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var i=n.then;if(n instanceof o)return e._state=3,e._value=n,void f(e);if("function"==typeof i)return void s(t(i,n),e)}e._state=1,e._value=n,f(e)}catch(r){u(e,r)}}function u(e,n){e._state=2,e._value=n,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)i(e,e._deferreds[n]);e._deferreds=null}function c(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function s(e,n){var t=!1;try{e(function(e){t||(t=!0,r(n,e))},function(e){t||(t=!0,u(n,e))})}catch(o){if(t)return;t=!0,u(n,o)}}var a=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var o=new this.constructor(n);return i(this,new c(e,t,o)),o},o.all=function(e){var n=Array.prototype.slice.call(e);return new o(function(e,t){function o(r,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var f=u.then;if("function"==typeof f)return void f.call(u,function(e){o(r,e)},t)}n[r]=u,0===--i&&e(n)}catch(c){t(c)}}if(0===n.length)return e([]);for(var i=n.length,r=0;r<n.length;r++)o(r,n[r])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(n,t){for(var o=0,i=e.length;o<i;o++)e[o].then(n,t)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},"undefined"!=typeof module&&module.exports?module.exports=o:e.Promise||(e.Promise=o)}(this);var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };if (typeof NodeList.prototype.forEach === "undefined") {NodeList.prototype.forEach=Array.prototype.forEach;}if(typeof HTMLCollection.prototype.forEach === "undefined"){HTMLCollection.prototype.forEach = Array.prototype.forEach;}
var metaArr = {
  "בית": "הלוואות לעסקים קטנים בתנאים מעולים ✅ (בעל עסק? מקסם זכאותך להלוואה מ-ש-ת-ל-מ-ת!) פינסקי הלוואות לעסקים קטנים בזמן קצר 🕘 ובתנאים יחודיים ✅ כנסו לקבלת הצעה",
  "הלוואה-בערבות-מדינה": "✅ הלוואה בערבות מדינה (בעל עסק? חסוך גם כאב ראש וגם כסף) המומחים של פינסקי הלוואות לעסקים קטנים יסיעו לך מול הקרן בערבות המדינה בהליך מהיר ובטוח!",
  "הלוואה-לעסק-חדש": "",
  "הלוואה-מהירה-לעסק": "גיוס אשראי לעסקים עד 8 מליון ש\"ח - בהלוואה אופטימלית, אצלנו תחסוך גם כאב ראש וגם כסף! מומחים בגיוס מימון לעסקים ממגוון קרנות סיוע, ובנקים מובילים."
};
var titles = {
    "בית": 'הלוואות לעסקים קטנים (עד•450,000 ש"ח) מהיר ומשתלם! בדקו אותנו',
    "הלוואה-בערבות-מדינה": "הלוואה בערבות מדינה (עד•500,000 ש\"ח לעסק) קבלו הצעה משתלמת!",
    "הלוואה-לעסק-חדש": "הלוואה לעסק חדש - פתרונות אשראי מעשיים לכלל העסקים - פּינסקי לעסקים",
    "הלוואה-מהירה-לעסק": "הלוואה מהירה לעסק ממגוון קרנות סיוע - מקסם את זכאותך להלוואה משתלמת"
}
function injectMeta(url){
  meta.content = metaArr[url];
  if( url == "הלוואה-לעסק-חדש" ){
    meta.remove()
  }
  document.title = titles[url];
  if(document.querySelector('script[type="application/ld+json"]') !== null){
    document.querySelector('script[type="application/ld+json"]').remove();
  }
  if(url == 'בית'){
      var json = {
        "@context": "http://schema.org",
        "@type": "LoanOrCredit",
        "amount": [
          {
            "@type": "MonetaryAmount",
            "name": "סכומי הלוואות שנעים בין",
            "maxValue": "8000000",
            "minValue": "70000"
          }
        ],
        "gracePeriod": "P1Y",
        "currency": "ILS",
        "loanTerm": {
          "@type": "QuantitativeValue",
          "name": "משך זמן ההלוואה",
          "maxValue": "P7Y",
          "minValue": "P5Y"
        },
        "recourseLoan": false,
        "renegotiableLoan": true,
        "annualPercentageRate": [
          {
            "@type": "QuantitativeValue",
            "name": "שיעורי ריבית נמוכים שנעים בין",
            "minValue": "1.3",
            "maxValue": "2.4"
          }
        ],
        "name": "מגוון סוגי הלוואות לעסקים קטנים ובינוניים"
      };
      var JSONLD = document.createElement('script');
      JSONLD.type = "application/ld+json";
      JSONLD.innerHTML = JSON.stringify(json)
      document.getElementsByTagName('head')[0].appendChild(JSONLD);
  }
}
var meta = document.createElement('meta');
meta.name = "description";
document.getElementsByTagName('head')[0].appendChild(meta);
var formPosition;
var this_url;
var footer = document.querySelector('footer');
var footerForm = false;
var currect_active_li;
var mobile = false;
var menuM = false;
var formdownup = 0;
var formPage;
var inHeigh;
var navli = document.querySelectorAll('header nav ul li');
var logo = document.querySelector('.logo');
var header = document.getElementsByTagName('header')[0]
var headerUL = document.querySelector('header ul');
//document.body.addEventListener('resize', function(){
//})

function active_class(li) {
    for (var i = navli.length - 1; i >= 0; i--) {
        navli[i].classList.remove('active');
        if (navli[i].children[0].href == li) {
            navli[i].classList.add('active');
        }
    }
}
function heandle_click_li(e) {
    e.preventDefault();
    e.stopPropagation();
//    menuMobile.checked = false;
    var e = e.srcElement || e.target;
    
    this_url = e.parentElement.children[0].href || e.parentElement.href || e.children[0].href;
    if (currect_active_li == this_url) return;
    currect_active_li = this_url;
    active_class(currect_active_li);
    this_url = this_url.split('/').pop();
    this_url = this_url ? this_url : 'בית';
    get_page(decodeURI(this_url));
}
function clear_content_page() {
    var mainEl = document.getElementsByTagName('main')[0]
    if(mainEl) document.body.removeChild(mainEl)
}
function xhr(method, url, params) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        params = params ? params : null;
        xhr.send(params);
    });
}
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*1000*60*60*24));
  var expires = "expires=" + d.toGMTString();
  window.document.cookie = cname+"="+cvalue+"; "+expires;
}
if(location.href.indexOf('gclid') !== -1) {
  setCookie('from_G','true', 1);
}
function add_submit_event(form) {
    form.onsubmit = function (e) {
        e.preventDefault();
        var btn = this.querySelectorAll('[type=submit]')[0]
        var inputs  = Array.apply(null, form).filter(function (e) {
            return e.nodeName == 'INPUT' && /^(te|num)/.test(e.type);
        })
        var name = inputs[0].value;
        var phone = inputs[1].value;

        if (phone.length > 8) {

            btn.innerHTML = 'רק שניה..';
            this.classList.add('opac-form')
            var fieldset = this.querySelector('fieldset');
                fieldset.setAttribute('disabled', '');

            var fromName = 'ראשון בדף'
            if(e.target.dataset.id ) { fromName = e.target.dataset.id == 'f' ? 'תחתון' : 'שני בדף'; }

            var details = {url: decodeURI(this_url) == 'בית' ? 'הבית' : decodeURI(this_url) , form: fromName , adwords: document.cookie.indexOf('from_G') === -1 ? false : true , UA: navigator.userAgent};


            xhr('post', 'https://europe-west1-pinskey-new.cloudfunctions.net/mail-sender', JSON.stringify({ name: name, phone: phone, details: details }))
                .then(function (res) {
                    fieldset.elements[0].value = '';
                    fieldset.elements[1].value = '';
                    show_alert();
                    fieldset.removeAttribute('disabled')
                    form.classList.remove('opac-form')
                    btn.innerHTML = 'צרו איתי קשר';
            }, function (e) {
                show_alert(false);
                fieldset.removeAttribute('disabled')
                form.classList.remove('opac-form')
                btn.innerHTML = 'צרו איתי קשר';
                fieldset.elements[0].value = '';
                fieldset.elements[1].value = '';
            });
        } else {
            // run error phone
        }
    };
}
function show_alert(param) {
    var mass = 'קיבלנו. נחזור אליך בהקדם'
    var error = 'הטופס לא נשלח בהצלחה. בדוק את החיבור לאינטרנט'
    var mass = param == undefined ? [mass, 'e2f7f5'] : [error, 'f7e2e2'] ;
    
    var html_alert = '<div class="alert" id="alert" style="background-color: #' + mass[1] + '">' + mass[0] + '</div>';
    var head = document.querySelector('footer');
    head.insertAdjacentHTML('afterbegin', html_alert);
    setTimeout(function () {
        var alert = document.getElementById('alert');
        alert.parentNode.removeChild(alert);
    }, 2500);
}
function attachFormEvent(footerF) {
    var f;
    if(footerF){
        f = document.querySelector('footer form')
    }else{
        formPage = document.querySelector('main form')
    }
    add_submit_event(f || formPage);
}
function handle_a_click(selector){
    document.querySelectorAll( selector ).forEach(function (e) {
        e.addEventListener('click', heandle_click_li, true);
    })
}


function get_page(url, notPush, firstLoading) {
    var url = decodeURI(url)
    
    xhr('get', "/" + url + ".html").then(function(res){
        clear_content_page()
        header.insertAdjacentHTML('afterend', res.target.response); // main Tag
        injectMeta(url);
        
        if (this_url && !notPush) history.pushState(null, null, url != 'בית' ? url : '/')
        if(firstLoading) handle_a_click('header ul a, .logo a, main a');
        attachFormEvent()
        
        //  injectForms(url); formPage = document.querySelector('.hero-flex form')
        
        window.scrollTo(0, 0);
            if(menuM == true) {
                document.querySelector('.header-m nav ul').classList.remove('ul-mobile-display')
                menuM = false;
            }
        updateFormPosition()
        this_url = url;
    }, function (e) {
        alert('eror')
    });
}
function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
function createMobileHeader(){
    if(!mobile){
        header.classList.add('header-m');
        logo.classList.add('logo-m')
        headerUL.insertAdjacentHTML('beforebegin', "<div id='hamburger'><span></span><span></span><span></span></div><a id='phone-icon' href='tel:072-395-7700'></a>")
        if(formPage){
            formPage.classList.remove('form-h-move');
            formPage.removeAttribute("style")
        }
        
        mobile=true;
    }
}
function removeMobileHeader(){
    header.classList.remove('header-m');
    logo.classList.remove('logo-m')
    document.querySelector('#hamburger').remove();
    document.querySelector('#phone-icon').remove();
    removeFooterForm()
    mobile = false;
}
function removeFooterForm(){
    if(footerForm){
        document.querySelector('.footer-form').remove()
        footerForm=false;           
    }
}
window.onpopstate = function () {
    var url = location.pathname.substring(1);
    url = url ? url : 'בית';
    currect_active_li = location.href;
    active_class(location.href);
    get_page(url, true);
};


function injectForms(){
    var form_html = '<form class="footer-form"><fieldset style="border:0;margin:0;padding:0;"><p class="ffp">להלוואה משתלמת לעסק השאר פרטים</p><div class="ff-wrp-inp"><input class="ff-inp" type="text" name="name" placeholder="שם"><input class="ff-inp" type="number" name="phone" placeholder="טלפון"><input class="ff-sub" type="submit" name="submit" value="שלח"></div></fieldset></form>';
    footer.insertAdjacentHTML('beforeend', form_html);
    attachFormEvent(true)
    footerForm=true;
}

function updateFormPosition(){
    formPosition = getOffset(document.querySelector('form')).top;
}
// mobile == navbar mibile =true, manuM = disply non
function chackMobile(){    
    inHeigh = window.innerHeight;
    if(!mobile && window.innerWidth < 1051){
        createMobileHeader()
        return;
    }
    if(mobile && window.innerWidth > 1050){
        if(menuM == true) {
            document.querySelector('.header-m nav ul').classList.remove('ul-mobile-display')
            menuM = false;
        }
        removeMobileHeader()
        removeFooterForm()
        return;
    }
}
var p = decodeURI(location.pathname.substring(1))
if(!p || p == "index.html") {
    p = 'בית';
}
chackMobile()

function formDownUp(px){
    px = px || window.scrollY
    formPage.style.msTransform = "translateY(" + px + "px)"
    formPage.style.msTransform = "translateY(" + px + "px)"
    formPage.style.transform = "translateY(" + px + "px)"
    return;
}

window.onload = function(){
    document.addEventListener("click", function (e) {
        var el = e.srcElement || e.target;
        if (mobile == true) {
            var target = el.id || el.parentElement.id;
            if (target == 'hamburger') {
                e.stopPropagation()
                menuM = document.querySelector('.header-m nav ul').classList.toggle('ul-mobile-display')
                return;
            }
            if(menuM == true) {
                document.querySelector('.header-m nav ul').classList.remove('ul-mobile-display')
                menuM = false;
            }
        }
    }, false);    
        
    window.addEventListener("scroll", function (event) {
        if(mobile){
            if(!footerForm && formPage.getBoundingClientRect().bottom < 0){
                injectForms()
                return;
            }
            if(footerForm && formPage.getBoundingClientRect().bottom > 40){
                removeFooterForm()
            } 
            
        }
        else{
            if(this_url == 'בית'){
                if(window.scrollY > 615){
                    if(!formPage.className){
                        formPage.classList.add('form-h-move')
                        formPage.top = 610;
                        return
                    }
                    if ((window.scrollY-850) > 0 && (window.scrollY-850) < 2060) {
                        formDownUp( (window.scrollY-850) )
                    }
                }
                if((window.scrollY) < 600){
                    formPage.classList.remove('form-h-move');
                    formPage.removeAttribute("style")
                    return;
                }
            }
            else{
                if ((window.scrollY-150) < document.body.clientHeight) {
                    formDownUp()
                }
            }            
        }
    });
}


get_page(p, undefined, true);
window.addEventListener('resize', function(){
    chackMobile()
    updateFormPosition()
})

