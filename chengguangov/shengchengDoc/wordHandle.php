<?php
class word
{
    function start()
    {
        ob_start();
        echo '<html xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:w="urn:schemas-microsoft-com:office:word"
xmlns="http://www.w3.org/TR/REC-html40">';
    }
    function save($path)
    {

        echo "</html>";
        $data = ob_get_contents();
        ob_end_clean();

        $this->wirtefile ($path,$data);
    }

    function wirtefile ($fn,$data)
    {
        $fp=fopen($fn,"wb");
        fwrite($fp,$data);
        fclose($fp);
    }
}
$html = '
<table width=600 cellpadding="6" cellspacing="1" bgcolor="#336699">

<tr bgcolor="White">
<td>就餐时间：{{detail.radv_time}}</td>
</tr>

<tr bgcolor="White">
<td>领导审核：{{detail.radvanced}}</td>
</tr>

<tr bgcolor="White">
<td>备注：{{detail.rdesc}}</td>
</tr>

<tr bgcolor="White">
<td>经办人：{{detail.rhandler}}</td>
</tr>

<tr bgcolor="White">
<td>就餐金额：{{detail.rmeal_amount}}</td>
</tr>

<tr bgcolor="White">
<td>就餐类型：{{detail.rmeal_class}}</td>
</tr>

<tr bgcolor="White">
<td>就餐场所：{{detail.rmeal_place}}</td>
</tr>

<tr bgcolor="White">
<td>就餐标准：{{detail.rmeal_stand}}</td>
</tr>

<tr bgcolor="White">
<td>就餐时间：{{detail.rmeal_time}}</td>
</tr>

<tr bgcolor="White">
<td>加班人数：{{detail.rpeonum}}</td>
</tr>

<tr bgcolor="White">
<td>加班人姓名：{{detail.rperson}}</td>
</tr>

<tr bgcolor="White">
<td>申请中队：{{detail.rsquad}}</td>
</tr>

<tr bgcolor="White">
<td>加班事由：{{detail.rword}}</td>
</tr>

<tr bgcolor="White">
<td>就餐地点：{{detail.rmeal_place}}</td>
</tr>


</table>
';

//批量生成

    $word = new word();
    $word->start();
    //$html = "aaa".$i;
    $wordname = 'apply'.time().".doc";
    echo $html;
    $word->save($wordname);
    ob_flush();//每次执行前刷新缓存
    flush();
    
    
    echo "https://chengguangov.diguikeji.com/shengchengDoc/".$wordname;

