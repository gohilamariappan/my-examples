
$(function() {
    /*
    *** Dropdown material design
    */
        $("input.floating-input").each(function(){
          var $input =  $(this).val();
               if ($input) {
                      $(this).parent(".ngui-auto-complete-wrapper").siblings("label").css({'top':'-25px','font-size':'15px!important','color':'#5264AE'})
               }else{
                 $(this).parent(".ngui-auto-complete-wrapper").siblings("label").css({'color':'#999','font-size':'17px',' font-weight':'normal','position':'absolute',
               'pointer-events':'none','left':'5px','top':'5px','transition':'0.2s ease all','-moz-transition':'0.2s ease all','-webkit-transition':'0.2s ease all' })
               }
            })
    
            $("input.floating-input").click(function(){
                      $(this).parent(".ngui-auto-complete-wrapper").siblings("label").css({'top':'-25px','font-size':'15px!important','color':'#5264AE'})
            })
    
        $("input.floating-input").blur(function(){
          var $input =  $(this).val();
               if ($input) {
                      $(this).parent(".ngui-auto-complete-wrapper").siblings("label").css({'top':'-25px','font-size':'15px!important','color':'#5264AE'})
               }else{
                 $(this).parent(".ngui-auto-complete-wrapper").siblings("label").css({'color':'#999','font-size':'17px',' font-weight':'normal','position':'absolute',
               'pointer-events':'none','left':'5px','top':'5px','transition':'0.2s ease all','-moz-transition':'0.2s ease all','-webkit-transition':'0.2s ease all' })
               }
            })
    
        $("input.floating-input").on('change',function(){
          var $input =  $(this).val();
               if ($input) {
                      $(this).parent(".ngui-auto-complete-wrapper").siblings("label").css({'top':'-25px','font-size':'15px!important','color':'#5264AE'})
               }else{
                    $(this).parent(".ngui-auto-complete-wrapper").siblings("label").css({'color':'#999','font-size':'17px',' font-weight':'normal','position':'absolute',
               'pointer-events':'none','left':'5px','top':'5px','transition':'0.2s ease all','-moz-transition':'0.2s ease all','-webkit-transition':'0.2s ease all' })
               }
            })
    
        $("input.floating-input").on('keypress',function(){
          var $input =  $(this).val();
               if ($input) {
                      $(this).parent(".ngui-auto-complete-wrapper").siblings("label").css({'top':'-25px','font-size':'15px!important','color':'#5264AE'})
               }else{
                    $(this).parent(".ngui-auto-complete-wrapper").siblings("label").css({'color':'#999','font-size':'17px',' font-weight':'normal','position':'absolute',
               'pointer-events':'none','left':'5px','top':'5px','transition':'0.2s ease all','-moz-transition':'0.2s ease all','-webkit-transition':'0.2s ease all' })
               }
            })
        });