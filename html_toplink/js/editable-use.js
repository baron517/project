$(document).ready(function () {
	//toggle `popup` / `inline` mode
	$.fn.editable.defaults.mode = 'popup';

	//make username editable
	$('#input-table').editable({

		emptytext: '请输入'
	});

	//make status editable
	$('#selet-table').editable({
		type: 'select',
		source: [{
			value: 1,
			text: '男性'
		}, {
			value: 2,
			text: '女性'
		}],
		emptytext: '请选择'
			/*
			//uncomment these lines to send data on server
			,pk: 1
			,url: '/post'
			*/
	});

	$('#textarea-table').editable({
		type: 'textarea',
		rows: 10,
		emptytext: '请输入',
	});


	$('#checklist-table').editable({
		type: 'checklist',
		source: [{
			value: 1,
			text: '唱歌'
		}, {
			value: 2,
			text: '跳舞'
		}],
		emptytext: '请选择'
	});


	$('#tags-table').editable({
		select2: {
			tags: ['标签一', '标签二', '标签三', '标签四'],
			tokenSeparators: [",", ", "]
		}
	});

	 
	//modify buttons style
	$.fn.editableform.buttons =
		'<button type="submit" class="btn btn-back editable-submit btn-mini"><img src="img/index_xtable_ok.png"/></button>' +
		'<button type="button" class="btn btn-default editable-cancel btn-mini"><img src="img/index_xtable_no.png"/></button>';



});
