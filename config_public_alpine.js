// The root filesystem location
export const diskImageUrl = "https://github.com/t-littlebits/alpine-image/releases/download/1.0/cheerpXImage.ext2";
// The root filesystem backend type
export const diskImageType = "http";
// Print an introduction message about the technology
export const printIntro = false;
// Is a graphical display needed
export const needsDisplay = true;
// Executable full path (Required)
export const cmd = "/sbin/init";
// Arguments, as an array (Required)
export const args = [];
// Optional extra parameters
export const opts = {
	// User id
	uid: 0,
	// Group id
	gid: 0
};
