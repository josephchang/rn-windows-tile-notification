function escapeXml(unsafe) {
  if (typeof unsafe !== 'string') {
    return unsafe;
  }

  return (unsafe || '').replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default:
        return c;
    }
  });
}

export default escapeXml;
