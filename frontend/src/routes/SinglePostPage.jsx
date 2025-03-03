import { Link, useParams } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import Images from "../components/Images";
import { useState } from "react";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "Loading";
  if (error) return "Error.." + error.message;
  if (!data) return "post not found";

  return (
    <>
      <div className="mx-10 md:mx-20 lg:mx-24 my-10">
        <div className="">
          <Link to="/cat" className="relative z-10 hover:text-red-800">
            {data.category}
          </Link>
        </div>
        <div className="">
          <h1 className="text-5xl mb-8">
            {data.title}
          </h1>
          <div>
            <span>
              by{" "}
              <Link to="/profile" className="hover:text-red-800">
                {data.user.username}
              </Link>{" "}
              |{" "}
            </span>
            <span>{format(data.createdAt)}</span>
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-[3fr_1fr] gap-2">
          <div className="">
            {/* Image */}
            <div className="w-full h md:h-72 lg:h-[30rem]">
              {data.img && (
                <div className="hidden h-full lg:block">
                  <Images
                    src={data.img}
                    w="600"
                    className="max-w-full h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="mt-5 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                ducimus in. Tempora inventore ut laboriosam sequi consectetur
                asperiores, ad, consequuntur nulla nam ipsum adipisci non. Ad
                ipsa corrupti, aliquid ea sequi ab nihil alias, libero
                cupiditate nulla optio eaque. Nihil suscipit ad expedita eum cum
                dolorum doloribus id perferendis quam impedit blanditiis vero in
                veritatis quisquam quidem atque sint praesentium ducimus
                nesciunt repellendus, laborum minima labore illo. Deserunt,
                possimus. Mollitia id autem amet, reiciendis, vero, facilis
                inventore nesciunt fugit aspernatur qui molestiae similique est
                quaerat voluptate nobis. Consequatur est veniam voluptatem quod,
                consectetur deserunt facilis eaque, nisi maiores, vitae
                possimus!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                architecto rem atque deserunt eligendi soluta aperiam libero in
                quo veritatis ea, optio maxime aut totam repellendus repellat
                magnam magni corporis ad quia saepe nihil sapiente ab cum. Quae
                error cupiditate alias ex amet veritatis dicta asperiores
                quisquam in corrupti quam dolor dolore culpa eligendi
                accusantium illum quas laudantium adipisci at obcaecati eum
                sunt, fuga aperiam! Esse eaque, alias expedita ratione ullam
                nesciunt vel aperiam praesentium fugit. Officia distinctio
                necessitatibus aperiam illo voluptas quae aliquam repellendus,
                veniam reprehenderit vitae ducimus voluptatem nisi ipsum
                quibusdam adipisci similique fuga provident sequi voluptate
                numquam. Ea voluptate quia fugiat maiores quis, aperiam facilis
                accusamus earum sunt, magni incidunt temporibus ipsum? Laborum
                pariatur provident culpa est voluptas maiores quisquam nulla,
                impedit reprehenderit delectus corrupti laboriosam quae
                explicabo ut, possimus alias suscipit sit officiis consequatur,
                eligendi excepturi. Excepturi numquam vitae optio eos beatae
                itaque aliquam soluta, fugit libero alias deserunt modi rerum
                aspernatur id rem accusantium delectus, ullam fuga ratione illo.
                Quos magnam ipsam fugit optio aliquid libero at explicabo
                dolorem, necessitatibus culpa tenetur nisi esse ratione
                voluptatum reiciendis porro obcaecati. Sunt repudiandae minima
                enim velit eaque numquam magni, reiciendis voluptatem totam,
                doloremque nam laboriosam incidunt repellendus assumenda
                obcaecati nesciunt consequuntur pariatur quod officia!
                Reprehenderit sed doloremque minima totam perferendis
                voluptatibus enim. Atque debitis rerum fugit nobis ipsum esse
                eos, asperiores repellendus quibusdam, delectus ad corporis
                dolor aspernatur dolorum nisi eligendi? At totam officia beatae
                magni non suscipit laborum, dolorem aliquam quae veritatis
                laboriosam architecto voluptates, exercitationem doloremque
                expedita incidunt harum facilis sit? Id nesciunt vel, quasi
                error quis enim consequatur? Veniam itaque temporibus natus,
                unde quod expedita. Quia nihil, unde aut laudantium alias sed
                ullam laborum praesentium. Quidem cumque voluptatem soluta ut
                esse, quaerat praesentium doloremque harum voluptas, incidunt,
                aliquid quam! Mollitia perferendis omnis, minima officiis
                reiciendis suscipit facilis tempore quia placeat reprehenderit,
                laudantium quis, aut similique. Debitis praesentium accusamus
                neque tenetur sapiente soluta aspernatur suscipit magnam
                asperiores, repellendus nulla eius illum natus, odio corrupti.
                Tempore, doloremque esse, eius possimus officiis, perferendis
                libero reiciendis accusamus unde neque facilis doloribus ex et
                velit quo nisi eos atque eum repudiandae enim quia odio? Fugiat
                distinctio perspiciatis enim sapiente quis est voluptates,
                necessitatibus sequi aut rem sed praesentium magni, culpa illo
                harum totam fugit eos. Voluptates, ipsum accusamus totam,
                facilis, cumque in cupiditate iste aspernatur nostrum rem velit
                molestiae odio et provident beatae eaque quos ratione! Quibusdam
                dolorem harum vel quis est sint ratione amet voluptates a cumque
                culpa voluptatum repudiandae ad dolores possimus, quos ut, aut
                deleniti beatae sit. Assumenda culpa harum qui, maiores sequi,
                inventore voluptates repellendus ad dicta enim fugit dolorem
                fugiat officia a dolore. Laborum porro voluptatum fugiat
                suscipit, maxime eos doloremque hic id doloribus eius corrupti
                fuga molestias, ducimus ullam libero nam qui illo! Unde sed,
                architecto cumque fugiat in itaque tenetur iure quae iste. Qui
                quo nam architecto deleniti pariatur, quos nisi temporibus
                molestias minus deserunt tempore odio modi iusto rerum sunt fuga
                debitis totam inventore reiciendis, repellat unde natus
                praesentium? Non, sequi.
              </p>
            </div>
            <div className="mt-5">
              <span className="flex gap-5 items-center">
                <MdDeleteOutline className="text-2xl cursor-pointer" />
                <FaBookmark
                  fill={isBookmarked ? "black" : "transparent"}
                  stroke="black"
                  width="1em"
                  strokeWidth="1em"
                  onClick={handleBookmarClick}
                  className="cursor-pointer"
                />
              </span>
            </div>
            <Comments />
          </div>
          <div className="border-2">AdBanner</div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
