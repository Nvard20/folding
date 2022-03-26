$(function() {
    $('[data-js="nextStep"]').click(function() {
        var id = +$('.calc__step.active').attr('data-id') + 1;
        $('.calc__step.active').removeClass('active');
        $('.calc__content.active').removeClass('active');
        $('.calc__content[data-id=' + id + ']').addClass('active');
        $('.calc__step[data-id=' + id + ']').addClass('active');
        return false
    })
    $('[data-js="prevStep"]').click(function () {
        var id = +$('.calc__step.active').attr('data-id') - 1;
        $('.calc__step.active').removeClass('active');
        $('.calc__content.active').removeClass('active');
        $('.calc__content[data-id=' + id + ']').addClass('active');
        $('.calc__step[data-id=' + id + ']').addClass('active');
        return false
    })

    $('.calc__step').click(function() {
        $('.calc__step.active').removeClass('active');
        $(this).addClass('active');
        $('.calc__content.active').removeClass('active');
        $('.calc__content[data-id=' + $(this).attr('data-id') + ']').addClass('active')
    })

    $('.ch').click(function() {
        $(this).closest('.chs').find('.ch.on').removeClass('on');
        $(this).addClass('on')
    })

    $('.col-sound').on('click', function(){
        var main = $(this).parent('div');
        var inp_name = $(main).attr('data-block');
        $(main).find('.col-sound').removeClass('csactive');
        $(main).find('.col-sound .sound_square').html('');
        var sval = $(this).attr('data-calcsel');
        $('input[name="'+inp_name+'"]').val(sval);
        $(this).addClass('csactive');
        $(this).find('.sound_square').html('+');
    })
})