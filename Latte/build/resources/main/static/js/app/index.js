var index = {
    init : function () {
        var _this = this;
        $('#btn-save').on('click', function () {
            _this.save();
        });

        $('#btn-update').on('click',function(){ //btn-update라는 id를 가진 HTML  엘리먼트에 click 이벤트가 발생할 때
            // update function을 실행하도록 이벤트를 등록합니다.
            _this.update();
        });

        $('#btn-delete').on('click', function () {
            _this.delete();
        });
    }
    ,
    save : function () {
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            alert('글이 등록되었습니다.');
            window.location.href = '/'; //글 등록이 성공하면 메인페이지로 이동합니다.
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },
    update : function(){ //신규로 추가될 update function입니다.
        var data={
            title: $('#title').val(),
            content: $('#content').val()
        };

        var id=$('#id').val();

        $.ajax({
            type: 'put', //여러 http method 중 put 메소드를 선택합니다. 이미 컨트롤러에서 putmapping으로 선언했기 때문.(Rest규약)
            url : '/api/v1/posts/'+id, //어느 게시글을 수정할 지 URL Path로 구분하기 위하여 Path에 id를 추가합니다.
            dataType : 'json',
            contentType: 'application/json; charset=utf-8',
            data : JSON.stringify(data)
        }).done(function(){
            alert('글이 수정되었습니다.');
            window.location.href='/';
        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    },

    delete : function () {
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType:'application/json; charset=utf-8'
        }).done(function() {
            alert('글이 삭제되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    }

};

index.init();