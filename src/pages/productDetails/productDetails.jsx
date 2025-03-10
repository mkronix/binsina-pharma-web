import { jsPDF } from "jspdf";
import "jspdf-autotable";
import medicine from "../../data/medications.json";
import logo from "/assets/img/logo.png";
import Button from "../../components/Button/Button";

const ProductDetails = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["No.", "Generic Name", "Dosage Form"];
    const tableRows = medicine.map((item, index) => [
      index + 1,
      item.name,
      item.type,
    ]);

    const imgWidth = 70;
    const imgHeight = 20;

    doc.addImage(logo, "PNG", 14, 10, imgWidth, imgHeight);

    const addressX = 100;
    const addressY = 15;
    const addressContent = [
      "Mobile: +91 98921 46706",
      "Location: Prabhat C.H.S, A/402, Shastri Nagar,",
      "Goregaon (W) - 400102, Mumbai, Maharashtra, India",
    ];
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    addressContent.forEach((line, index) => {
      doc.text(line, addressX, addressY + index * 5);
    });

    doc.setDrawColor(8, 139, 140);
    doc.setLineWidth(1);
    doc.line(14, 30, 196, 30);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 35,
      theme: "grid",
      headStyles: {
        fillColor: [8, 139, 140],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [240, 248, 255],
      },
      styles: {
        font: "helvetica",
        fontSize: 10,
        cellPadding: 4,
      },
      columnStyles: {
        2: { cellWidth: 50 },
      },
      margin: { top: 35 },
    });

    doc.save("BinSinaPharmaProducts.pdf");
  };

  return (
    <main className='flex justify-center items-center'>
      <section className='container w-full md:max-w-6xl p-6 py-48'>
        <article className='flex justify-between items-center mb-6'>
          <h1 className='md:text-3xl text-lg font-semibold uppercase md:font-bold text-gray-800'>All Products</h1>
          <div className='flex gap-4'>
            <Button title='Download PDF' onClick={downloadPDF} />
          </div>
        </article>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse bg-white shadow-md rounded-lg'>
            <thead className='bg-gradient-to-r from-brightColor to-[#1a1b26]'>
              <tr>
                <th className='text-white px-4 py-2 text-left'>Sr.No</th>
                <th className='text-white px-4 py-2 text-left'>Generic Name</th>
                <th className='text-white px-4 py-2 w-full text-end'>
                  Dosage Forms
                </th>
              </tr>
            </thead>
            <tbody>
              {medicine.map((item, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100`}
                >
                  <td className='px-4 py-2 border-b border-gray-300'>
                    {index + 1}
                  </td>
                  <td className='px-4 py-2 border-b border-gray-300'>
                    {item.name}
                  </td>
                  <td className='px-4 py-2 border-b border-gray-300 text-end'>
                    {item.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
