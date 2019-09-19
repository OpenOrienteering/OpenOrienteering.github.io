function suggestDownload(userAgent, platform)
{
    var platforms = {
        windows :     ['Windows', 'Win64', 'Win32'],
        macOS :       ['Macintosh', 'MacIntel'],
        unsupported : ['iPhone', 'iPad', 'iPod', 'WinCE'],
    };
    
    if (platforms.unsupported.indexOf(platform) !== -1)
        return [];
    
    if (platforms.macOS.indexOf(platform) !== -1)
        return ['DMG for macOS', 'macOS.dmg'];
    
    if (platforms.windows.indexOf(platform) !== -1)
        return ['Installer for Windows (64 bit)', 'Windows-x64.exe'];
    
    if (/Android/.test(userAgent))
        return ['APK for Android (arm v7)', 'Android-armeabi-v7a.apk'];
    
    if (/Linux/.test(platform))
        return ['for Linux', 'Linux'];
    
    return [];  // not recognized
}

function updateDownloadButton(tag)
{
    var suggestion = suggestDownload(window.navigator.userAgent, window.navigator.platform);
    if (suggestion.length == 0)
        return;
    
    var button = document.getElementById('button-download-' + tag);
    if (!button)
        return;
    
    var label = suggestion[0];
    var href = 'https://github.com/OpenOrienteering/mapper/releases/download/' + tag
               + '/OpenOrienteering-Mapper-' + tag.replace('-', '_').replace(/^v/, '')
               + '-' + suggestion[1];
    if (suggestion[1] == 'Linux')
    {
        if (/^dev/.test(tag))
        {
            href = 'https://software.opensuse.org/download.html?project=home%3Adg0yt&package=openorienteering-mapper-unstable';
        }
        else if (/^master/.test(tag))
        {
            href = 'https://software.opensuse.org/download.html?project=home%3Adg0yt&package=openorienteering-mapper-master';
        }
        else
        {
            href = 'https://software.opensuse.org/download.html?project=home%3Adg0yt&package=openorienteering-mapper';
        }
    }
    
    var origHref = button.getAttribute('href');
    button.setAttribute('href', href);
    button.innerHTML = 'Download ' + tag + ' ' + label + ' &raquo;';
    var moreDownloads = document.createElement('p');
    moreDownloads.innerHTML = '<a href="' + origHref + '">More downloads for this version</a>';
    button.parentNode.parentNode.insertBefore(moreDownloads, button.parentNode.nextSibling);
}
