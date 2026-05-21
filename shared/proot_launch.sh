#!/data/data/com.termux/files/usr/bin/bash
# FOLIO proot-distro Ubuntu launch script
# Fixes "error: cannot open /proc/self/fd" by using --isolated flag.

proot-distro login ubuntu --isolated "$@"
