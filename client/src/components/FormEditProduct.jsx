import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FormEditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    strategy: "",
    implementation: "",
    email: "",
    mobile: "",
    budget: "",
    year: "",
    evaluation: "",
    strength: "",
    weak: "",
    development: "",
    improvement: "",
    suggestion: "",
  });

  useEffect(() => {
    loadData(params.id);
  }, []);

  const loadData = async (id) => {
    await axios.get("http://localhost:3000/api/product/" + id).then((res) => {
      setData(res.data);
    });
  };
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await axios
      .put("http://localhost:3000/api/product/" + params.id, data)
      .then((res) => {
        console.log(res.data);
        navigate("/eval");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="text-center p-8 text-sm font-medium text-gray-900 dark:text-white">
        <h1>การประเมินนโยบายสาธารณะ</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mx-96">
          <div className="mb-2">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              เเผนเเม่บทย่อยภายใต้ยุทธศาสตร์ชาติประเด็นการเกษตร
            </label>
            <select
              type="text"
              onChange={(e) => handleChange(e)}
              value={data.strategy}
              name="strategy"
              aria-describedby="nameHelp"
              className="form-select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              id="strategy"
            >
              <option selected className="text-blue">
                กรุณาเลือกตัวชี้วัด
              </option>
              <option>
                อัตราการขยายตัวของผลิตภัณฑ์มวลรวมในประเทศสาขาเกษตร(ผลิตภัณฑ์มวลรวมในประเทศในสาขาเกษตรเพิ่มขึ้น)
              </option>
              <option>
                อัตราผลิตภาพการผลิตของภาคเกษตร(ผลิตภาพการผลิตของภาคเกษตรเพิ่มขึ้น)
              </option>
              <option>
                อัตราการขยายตัวของมูลค่าของสินค้าเกษตรอัตลักษณ์พื้นถิ่น(สินค้าเกษตรอัตลักษณ์พื้นถิ่นมีมูลค่าเพิ่มขึ้น(จ.3:กระทรวงเกษตรฯ))
              </option>
              <option>
                อัตราการขยายตัวของมูลค่าของสินค้าเกษตรปลอดภัยที่ได้รับการรับรอง
              </option>
              <option>
                การจัดอันดับดัชนีคุณภาพและความปลอดภัยภายใต้ดัชนีความมั่นคงทางอาหาร(ผลิตภัณฑ์เกษตรปลอดภัยของไทยได้รับการยอมรับด้านคุณภาพความปลอดภัยและคุณค่าทางโภชนาการสูงขึ้น)
              </option>
              <option>
                อัตราการขยายตัวการจดทะเบียนดำเนินการของวิสาหกิจชุมชนที่เกี่ยวกับเกษตรชีวภาพ(วิสาหกิจการเกษตรจากฐานชีวภาพและภูมิปัญญาท้องถิ่นมีการจัดตั้งในทุกตำบลเพิ่มขึ้น)ของมูลค่าสินค้าเกษตรชีวภาพ(เฉลี่ยร้อยละ)(สินค้าเกษตรชีวภาพมีมูลค่าเพิ่มขึ้น)
              </option>
              <option>
                การจดทะเบียนดำเนินการของวิสาหกิจชุมชนที่เกี่ยวกับเกษตรชีวภาพ(วิสาหกิจการเกษตรจากฐานชีวภาพและภูมิปัญญาท้องถิ่นมีการจัดตั้งในทุกตำบลเพิ่มขึ้น)
              </option>
              <option>
                มูลค่าสินค้าที่มีการใช้เทคโนโลยีสมัยใหม่/อัจฉริยะ(สินค้าที่ได้จากเทคโนโลยีสมัยใหม่/อัจฉริยะมีมูลค่าเพิ่มขึ้น)
              </option>
              <option>
                ผลผลิตต่อหน่วยของฟาร์มหรือแปลงที่มีการใช้เทคโนโลยีสมัยใหม่/อัจฉริยะ(ผลผลิตต่อหน่วยของฟาร์มหรือแปลงที่มีการใช้เทคโนโลยีสมัยใหม่/อัจฉริยะเพิ่มขึ้น)
              </option>
              <option>
                ผลผลิตสินค้าเกษตรต่อหน่วย(ประสิทธิภาพการผลิตสินค้าเกษตรต่อหน่วยมีการปรับตัวเพิ่มขึ้น)
              </option>
              <option>
                สถาบันเกษตรกร(สหกรณ์,วิสาหกิจชุมชน,และกลุ่มเกษตรกร)ที่ขึ้นทะเบียนกับกระทรวงเกษตรและสหกรณ์มีความเข้มแข็งในระดับมาตรฐาน
              </option>
            </select>
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              หน่วยงานที่นำนโยบายไปปฏิบัติ
            </label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              value={data.implementation}
              name="implementation"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="หน่วยงานที่นำนโยบายไปปฏิบัติ"
            />
          </div>
          <div className="mb-2">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              อีเมล
            </label>
            <input
              type="email"
              onChange={(e) => handleChange(e)}
              value={data.email}
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              โทรศัพท์
            </label>
            <input
              type="number"
              onChange={(e) => handleChange(e)}
              value={data.mobile}
              name="mobile"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="โทรศัพท์"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              งบประมาณ
            </label>
            <input
              type="number"
              onChange={(e) => handleChange(e)}
              value={data.budget}
              name="budget"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="งบประมาณ"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ปีงบประมาณ
            </label>
            <input
              type="number"
              onChange={(e) => handleChange(e)}
              value={data.year}
              name="year"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="ปีงบประมาณ"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ผลประเมิน
            </label>
            <input
              type="float"
              onChange={(e) => handleChange(e)}
              value={data.evaluation}
              name="evaluation"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="ผลประเมิน"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              จุดแข็ง
            </label>
            <textarea
              type="text"
              onChange={(e) => handleChange(e)}
              value={data.strength}
              name="strength"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="จุดแข็ง"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              จุดอ่อน
            </label>
            <textarea
              type="text"
              onChange={(e) => handleChange(e)}
              value={data.weak}
              name="weak"
              id="weak"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="จุดอ่อน"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              แนวทางเสริม (จุดแข็ง)
            </label>
            <textarea
              type="text"
              onChange={(e) => handleChange(e)}
              value={data.development}
              name="development"
              id="development"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="แนวทางเสริม (จุดแข็ง)"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              จุดที่ควรปรับปรุง (จุดอ่อน)
            </label>
            <textarea
              type="text"
              onChange={(e) => handleChange(e)}
              value={data.improvement}
              name="improvement"
              id="improvement"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="จุดที่ควรปรับปรุง (จุดอ่อน)"
            />
          </div>
          <div className="mb-2">
            <label
              for="suggestion"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ข้อเสนอแนะ
            </label>
            <textarea
              type="text"
              onChange={(e) => handleChange(e)}
              value={data.suggestion}
              name="suggestion"
              id="suggestion"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="ข้อเสนอแนะ"
            />
          </div>
        </div>
        <div className="grid mx-96 mb-6 mt-6">
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              for="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-green-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditProduct;
