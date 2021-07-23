$(document).ready(function(){
    if ( $("#bber-talk").length > 0 ) {
      jsonUrl = "https://626c-blogpkly-13278c-1258453354.tcb.qcloud.la/json/bber.json"
      $.getJSON(jsonUrl+"?t="+Date.parse( new Date()),function(res){
        var bberHtml = ''
        $.each(res.data, function(i, item){
          d = new Date(item.date)
          date = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate() +' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
          dataTime = '<span class="datatime">'+date+'</span>'
          bberHtml += '<li class="item item-'+(i+1)+'">'+dataTime+'： <a href="https://guole.fun/bb/">'+item.content+'</a></li>'
        });
        $('#bber-talk').append('<span class="index-talk-icon"><svg viewBox="0 0 1024 1024" width="21" height="21"><path d="M184.32 891.667692c-12.603077 0-25.206154-2.363077-37.809231-7.876923-37.021538-14.966154-59.864615-49.624615-59.864615-89.009231v-275.692307c0-212.676923 173.292308-385.969231 385.969231-385.969231h78.76923c212.676923 0 385.969231 173.292308 385.969231 385.969231 0 169.353846-137.846154 307.2-307.2 307.2H289.083077l-37.021539 37.021538c-18.904615 18.116923-43.323077 28.356923-67.741538 28.356923zM472.615385 195.347692c-178.018462 0-322.953846 144.935385-322.953847 322.953846v275.692308c0 21.267692 15.753846 29.144615 20.48 31.507692 4.726154 2.363077 22.055385 7.876923 37.021539-7.08923l46.473846-46.473846c6.301538-6.301538 14.178462-9.452308 22.055385-9.452308h354.461538c134.695385 0 244.184615-109.489231 244.184616-244.184616 0-178.018462-144.935385-322.953846-322.953847-322.953846H472.615385z"></path><path d="M321.378462 512m-59.076924 0a59.076923 59.076923 0 1 0 118.153847 0 59.076923 59.076923 0 1 0-118.153847 0Z"></path><path d="M518.301538 512m-59.076923 0a59.076923 59.076923 0 1 0 118.153847 0 59.076923 59.076923 0 1 0-118.153847 0Z"></path><path d="M715.224615 512m-59.076923 0a59.076923 59.076923 0 1 0 118.153846 0 59.076923 59.076923 0 1 0-118.153846 0Z"></path></svg></span><ul class="talk-list">'+bberHtml+'</ul>')
        Lately({ 'target': '#bber-talk .datatime' });
      });
      function Roll (){
        var list_li = $('.talk-list li'),cur_li = list_li.first(),last_li = list_li.last();
        last_li.after(cur_li);
      };
      setInterval(Roll,3000);
    }
  });