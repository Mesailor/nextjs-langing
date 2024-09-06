export function Background({ children }: React.PropsWithChildren) {
  return (
    <div style={{ backgroundImage: 'url("/stripped_background.avif")' }}>
      {children}
    </div>
  );
}
