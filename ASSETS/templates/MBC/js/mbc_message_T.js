var animationData = (function () {
    var animationData = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "data/GenericMessageTitle.json",
        'dataType': "json",
        'success': function (data) {
            animationData = data;
        }
    });
    return animationData;
})(); 

function runAnimationIN() {
    
    var params = {
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: animationData
    };

    let f0content=document.getElementById('f0').innerHTML;
    let f1content=document.getElementById('f1').innerHTML;
    let f2content=document.getElementById('f2').innerHTML;
    let f3content=document.getElementById('f3').innerHTML;
    var anim = lottie.loadAnimation(params);
    anim.renderer.elements[3].updateDocumentData({t:f0content});
    anim.renderer.elements[4].updateDocumentData({t:f1content});
    anim.renderer.elements[2].updateDocumentData({t:f2content});
    anim.renderer.elements[5].updateDocumentData({t:f3content});
}
