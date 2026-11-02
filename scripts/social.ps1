Add-Type -AssemblyName System.Drawing
$canvas = New-Object System.Drawing.Bitmap 1200,630
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$graphics.Clear([System.Drawing.ColorTranslator]::FromHtml('#F2F7F0'))
$green = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#137C66'))
$ink = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#243D30'))
$muted = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#73836F'))
$label = New-Object System.Drawing.Font 'Microsoft YaHei',22
$title = New-Object System.Drawing.Font 'Microsoft YaHei',48,([System.Drawing.FontStyle]::Bold)
$bodyFont = New-Object System.Drawing.Font 'Microsoft YaHei',23
$graphics.FillRectangle($green,72,75,8,34)
$graphics.DrawString('ChatGPT Exporter 中文站',$label,$green,96,73)
$graphics.DrawString('让对话的价值，',$title,$ink,72,175)
$graphics.DrawString('留在文档里。',$title,$green,72,265)
$graphics.DrawString('Word · PDF · Excel · 批量导出',$bodyFont,$muted,76,405)
$graphics.DrawString('chatgptexporter.cn',$label,$muted,76,525)
$canvas.Save((Join-Path $PSScriptRoot '../public/social.png'),[System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$canvas.Dispose()
$green.Dispose()
$ink.Dispose()
$muted.Dispose()
$label.Dispose()
$title.Dispose()
$bodyFont.Dispose()
