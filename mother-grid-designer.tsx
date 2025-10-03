import React, { useState, useRef, useEffect } from 'react';
import { Download, RotateCcw } from 'lucide-react';

const MotherGridDesigner = () => {
  const canvasRef = useRef(null);
  const [rows, setRows] = useState(7);
  const [columns, setColumns] = useState(5);
  const [spacing, setSpacing] = useState(40);
  const [lineWidth, setLineWidth] = useState(2);
  const [gridColor, setGridColor] = useState('#000000');

  useEffect(() => {
    drawGrid();
  }, [rows, columns, spacing, lineWidth, gridColor]);

  const drawGrid = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Calculate dimensions
    const horizontalLineLength = width * 0.4;
    const gridWidth = columns * spacing;
    const gridHeight = rows * spacing;
    
    const startX = 50;
    const startY = (height - gridHeight) / 2;

    ctx.strokeStyle = gridColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'miter';

    // Draw horizontal lines
    for (let i = 0; i < rows; i++) {
      const y = startY + i * spacing;
      ctx.beginPath();
      ctx.moveTo(startX, y);
      ctx.lineTo(startX + horizontalLineLength, y);
      ctx.stroke();
    }

    // Calculate grid start position
    const gridStartX = startX + horizontalLineLength;
    const gridStartY = startY;

    // Draw diagonal grid pattern
    // Draw forward diagonals (/)
    for (let col = 0; col <= columns; col++) {
      for (let row = 0; row < rows - 1; row++) {
        const x1 = gridStartX + col * spacing;
        const y1 = gridStartY + row * spacing;
        const x2 = gridStartX + (col + 1) * spacing;
        const y2 = gridStartY + (row + 1) * spacing;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }

    // Draw backward diagonals (\)
    for (let col = 0; col <= columns; col++) {
      for (let row = 1; row < rows; row++) {
        const x1 = gridStartX + col * spacing;
        const y1 = gridStartY + row * spacing;
        const x2 = gridStartX + (col + 1) * spacing;
        const y2 = gridStartY + (row - 1) * spacing;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'mother-grid.png';
    link.href = url;
    link.click();
  };

  const resetSettings = () => {
    setRows(7);
    setColumns(5);
    setSpacing(40);
    setLineWidth(2);
    setGridColor('#000000');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Mother Grid Designer</h1>
          <p className="text-slate-600">Create beautiful lattice and argyle patterns</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Grid Settings</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Rows: {rows}
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="15"
                    value={rows}
                    onChange={(e) => setRows(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Columns: {columns}
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="12"
                    value={columns}
                    onChange={(e) => setColumns(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Spacing: {spacing}px
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="80"
                    value={spacing}
                    onChange={(e) => setSpacing(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Line Width: {lineWidth}px
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={lineWidth}
                    onChange={(e) => setLineWidth(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Grid Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={gridColor}
                      onChange={(e) => setGridColor(e.target.value)}
                      className="w-16 h-10 rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={gridColor}
                      onChange={(e) => setGridColor(e.target.value)}
                      className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={downloadImage}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  <Download size={18} />
                  Download
                </button>
                <button
                  onClick={resetSettings}
                  className="flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  <RotateCcw size={18} />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Tips</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Adjust rows and columns to change the grid density</li>
                <li>• Increase spacing for a more open pattern</li>
                <li>• Try different colors for unique designs</li>
                <li>• Download your design as a PNG image</li>
              </ul>
            </div>
          </div>

          {/* Canvas Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-center">
                <canvas
                  ref={canvasRef}
                  width={800}
                  height={600}
                  className="border border-slate-200 rounded-lg max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotherGridDesigner;