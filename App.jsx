import EvilEye from './EvilEye';

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: '#000', overflow: 'hidden' }}>
     
      {/* 背景としての目 */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <EvilEye
          eyeColor="#FF6F37"
          intensity={1.5}
          scale={0.8}
          backgroundColor="#000000"
        />
      </div>

      {/* 前面のテキストコンテンツ */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ fontSize: '4rem', margin: 0, textShadow: '0 0 20px rgba(255,111,55,0.8)' }}>
           FIGHT FORWARD 2026
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8, marginTop: '20px' }}>
          Be smart, be paasionate 
        </p>
        <button style={{
          marginTop: '30px',
          padding: '12px 24px',
          backgroundColor: 'transparent',
          border: '2px solid #FF6F37',
          color: '#FF6F37',
          cursor: 'pointer',
          fontSize: '1rem',
          borderRadius: '4px',
          transition: '0.3s'
        }}>
          ENTER
        </button>
      </div>

    </div>
  );
}

export default App;
