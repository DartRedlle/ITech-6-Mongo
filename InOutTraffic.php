<?php
include "db.php";

$collection = $DB->NetInfo;

$res = $collection->find([],['projection'=>['_id'=>0, 'Intraffic'=>1, 'Outtraffic'=>1]]);


$inTraffic = 0;
$outTraffic = 0;

foreach($res as $item)
{
    $inTraffic += $item['Intraffic'];
    $outTraffic += $item['Outtraffic'];
}

echo "<table>
<tr><th>InTraffic</th><th>OutTraffic</th></tr>
<tr><td>$inTraffic</td><td>$outTraffic</td></tr>
</table>";