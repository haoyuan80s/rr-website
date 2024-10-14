
daily_data = {
    "date": "2024-10-14",
    "tweets": [

        {
            "startTime": "01:08",
            "arxivId": "2410.08385",
            "arxivLink": "https://arxiv.org/abs/2410.08385",
            "title": "Language Models: Cheating on Tests? Train-Test Overlap Exposed!",
            "institute": "Stanford University",
            "text": "This research focuses on the issue of train-test overlap in language models, which occurs when models are trained on data they are later tested on. The paper argues that developers should report train-test overlap statistics or release their training data to ensure transparency and improve the validity of model evaluations. This differs from previous work by emphasizing the need for developers to proactively address this issue, rather than relying solely on black-box methods to detect it.",
            "paper-title": "Language model developers should report train-test overlap",
            "image-path": "flux_paper_image/2410.08385_1728928320.png"
        },

        {
            "startTime": "01:25",
            "arxivId": "2410.08255",
            "arxivLink": "https://arxiv.org/abs/2410.08255",
            "title": "LLMs Learn Like Hungry Students: Starvation Fuels Universal Knowledge",
            "institute": "MIT",
            "text": "This research explores the universality of knowledge representations learned by LLMs, focusing on knowledge graphs. It investigates how LLMs of different sizes and architectures learn similar representations, even when trained on different tasks. The study introduces the concept of \"intelligence from starvation,\" suggesting that LLMs learn more generalizable representations when they are forced to use limited resources.",
            "paper-title": "Generalization from Starvation: Hints of Universality in LLM Knowledge Graph Learning",
            "image-path": "flux_paper_image/2410.08255_1728930897.png"
        },

        {
            "startTime": "01:48",
            "arxivId": "2410.09024",
            "arxivLink": "https://arxiv.org/abs/2410.09024",
            "title": "AI Agents Gone Rogue: New Benchmark Tests for Malicious Behavior",
            "institute": "Gray Swan AI, UK AI Safety Institute, EPFL...",
            "text": "This research introduces a new benchmark called AgentHarm, specifically designed to evaluate the robustness of LLM agents against malicious prompts. Unlike previous work that focused on chatbots, AgentHarm assesses the ability of agents to execute multi-step tasks with harmful intent, using synthetic tools and a comprehensive scoring system.",
            "paper-title": "AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents",
            "image-path": "flux_paper_image/2410.09024_1728930766.png"
        },

        {
            "startTime": "02:07",
            "arxivId": "2410.08261",
            "arxivLink": "https://arxiv.org/abs/2410.08261",
            "title": "Masked Image Modeling Gets a Makeover: Meissonic Makes High-Res Images a Breeze!",
            "institute": "Alibaba Group, Skywork AI, HKUST(GZ)...",
            "text": "This research introduces Meissonic, a text-to-image model that utilizes masked image modeling (MIM) to generate high-resolution images. Unlike previous MIM models, Meissonic incorporates a multi-modal transformer architecture, advanced positional encoding strategies, and an adaptive masking rate as a sampling condition.",
            "paper-title": "Meissonic: Revitalizing Masked Generative Transformers for Efficient High-Resolution Text-to-Image Synthesis",
            "image-path": "flux_paper_image/2410.08261_1728929030.png"
        },

        {
            "startTime": "02:42",
            "arxivId": "2410.09038",
            "arxivLink": "https://arxiv.org/abs/2410.09038",
            "title": "LLMs Get Stratified: A New Way to Boost Diversity in AI Responses",
            "institute": "UC Berkeley",
            "text": "This research proposes SimpleStrat, a novel approach to diversify language model (LLM) outputs by partitioning the solution space into strata. Unlike temperature scaling, SimpleStrat doesn't degrade generation quality and ensures outputs align with the true distribution of answers.",
            "paper-title": "SimpleStrat: Diversifying Language Model Generation with Stratification",
            "image-path": "flux_paper_image/2410.09038_1728929863.png"
        },

        {
            "startTime": "03:09",
            "arxivId": "2410.08620",
            "arxivLink": "https://arxiv.org/abs/2410.08620",
            "title": "AI's New Weakness: Can't Tell a Foggy Cat from a Dog?",
            "institute": "Tsinghua University",
            "text": "This research explores adversarial attacks on image classifiers using natural language prompts. Unlike previous methods that focus on noise or image editing, this approach leverages text-to-image models to generate adversarial images based on maliciously crafted prompts.",
            "paper-title": "Natural Language Induced Adversarial Images",
            "image-path": "flux_paper_image/2410.08620_1728928599.png"
        },

        {
            "startTime": "03:32",
            "arxivId": "2410.09040",
            "arxivLink": "https://arxiv.org/abs/2410.09040",
            "title": "LLMs: Jailbreak-Proof? Not So Fast! New Attack Uses Attention Manipulation",
            "institute": "UC Santa Cruz, Johns Hopkins University, University of Edinburgh...",
            "text": "This research introduces AttnGCG, a jailbreaking method that manipulates the attention scores of LLMs during attacks. Unlike previous methods that focus solely on maximizing the probability of generating target tokens, AttnGCG leverages attention scores as an additional optimization objective, effectively guiding the model to focus on the adversarial suffix and bypass safety protocols.",
            "paper-title": "AttnGCG: Enhancing Jailbreaking Attacks on LLMs with Attention Manipulation",
            "image-path": "flux_paper_image/2410.09040_1728928451.png"
        },

        {
            "startTime": "03:59",
            "arxivId": "2410.09008",
            "arxivLink": "https://arxiv.org/abs/2410.09008",
            "title": "LLMs Get a Tutor: Supervised Learning Helps Language Models Think Better",
            "institute": "Peking University, Skywork AI, UC Berkeley...",
            "text": "This research introduces a two-stage framework called SUPERCORRECT that uses a large teacher model to guide and correct the reasoning process of a smaller student model. This differs from previous work by focusing on improving both the reasoning and reflection abilities of the student model, rather than just focusing on the final answer.",
            "paper-title": "SuperCorrect: Supervising and Correcting Language Models with Error-Driven Insights",
            "image-path": "flux_paper_image/2410.09008_1728930815.png"
        },

        {
            "startTime": "04:22",
            "arxivId": "2410.08292",
            "arxivLink": "https://arxiv.org/abs/2410.08292",
            "title": "Looping Transformers: Can They Learn to Do Math Like Us?",
            "institute": "MIT, Google",
            "text": "This paper focuses on the learnability of multi-step algorithms by looped Transformers, a model where the same Transformer block is repeated multiple times. Unlike previous work that focused on expressivity, this research investigates whether these models can actually learn to implement such algorithms during training.",
            "paper-title": "Can Looped Transformers Learn to Implement Multi-step Gradient Descent for In-context Learning?",
            "image-path": "flux_paper_image/2410.08292_1728928847.png"
        },

        {
            "startTime": "04:42",
            "arxivId": "2410.08660",
            "arxivLink": "https://arxiv.org/abs/2410.08660",
            "title": "Jailbreaking LLMs? Not So Fast! New Defense Framework Decomposes Attacks",
            "institute": "University of Wisconsin\u2013Madison",
            "text": "This research introduces RePD, a novel defense framework that utilizes a retrieval-based prompt decomposition strategy to mitigate jailbreak attacks on LLMs. Unlike previous methods that rely on prompt engineering or response filtering, RePD teaches the LLM to identify and neutralize harmful components within user prompts by providing a one-shot learning example.",
            "paper-title": "RePD: Defending Jailbreak Attack through a Retrieval-based Prompt Decomposition Process",
            "image-path": "flux_paper_image/2410.08660_1728931034.png"
        },

        {
            "startTime": "05:11",
            "arxivId": "2410.08503",
            "arxivLink": "https://arxiv.org/abs/2410.08503",
            "title": "Adversarial Training: It's Not Just About Tricking the AI, It's About Teaching It to See!",
            "institute": "Peking University, CMU",
            "text": "This research delves into the feature learning process of adversarial training, focusing on a structured data model that decomposes features into robust and non-robust categories. This approach differs from previous work by analyzing the optimization process and providing a theoretical understanding of why adversarial examples exist and how adversarial training improves model robustness.",
            "paper-title": "Adversarial Training Can Provably Improve Robustness: Theoretical Analysis of Feature Learning Process Under Structured Data",
            "image-path": "flux_paper_image/2410.08503_1728931508.png"
        },

        {
            "startTime": "05:38",
            "arxivId": "2410.08950",
            "arxivLink": "https://arxiv.org/abs/2410.08950",
            "title": "Skip Connections: The Secret Weapon of Adversarial Attacks?",
            "institute": "Peking University, Fudan University",
            "text": "This research investigates the impact of skip connections on the transferability of adversarial attacks, proposing a method called Skip Gradient Method (SGM) that leverages gradients from skip connections to improve attack effectiveness. Unlike previous work that focuses on the entire network, SGM specifically targets the architectural characteristics of skip connections.",
            "paper-title": "On the Adversarial Transferability of Generalized\"Skip Connections\"",
            "image-path": "flux_paper_image/2410.08950_1728928636.png"
        },

        {
            "startTime": "06:03",
            "arxivId": "2410.08601",
            "arxivLink": "https://arxiv.org/abs/2410.08601",
            "title": "Prompt Engineering: Stop the Drift, Get Strategic!",
            "institute": "Chinese Academy of Sciences, Microsoft",
            "text": "This research introduces STRAGO, a prompt optimization method that analyzes both successful and failed cases to identify key factors for achieving task objectives. Unlike previous methods, STRAGO uses in-context learning to develop specific, actionable strategies that offer detailed, step-by-step guidance for prompt refinement.",
            "paper-title": "StraGo: Harnessing Strategic Guidance for Prompt Optimization",
            "image-path": "flux_paper_image/2410.08601_1728930438.png"
        },

        {
            "startTime": "06:28",
            "arxivId": "2410.08783",
            "arxivLink": "https://arxiv.org/abs/2410.08783",
            "title": "AI Can't See What Humans Do: A New Framework for Human-AI Collaboration",
            "institute": "Massachusetts Institute of Technology, Yale School of Medicine",
            "text": "This research introduces a novel framework for human-AI collaboration in prediction tasks. It focuses on identifying inputs that are \"algorithmically indistinguishable,\" meaning they look the same to any feasible predictive algorithm. This allows for the selective incorporation of human judgment only when it can demonstrably improve the algorithm's performance.",
            "paper-title": "Integrating Expert Judgment and Algorithmic Decision Making: An Indistinguishability Framework",
            "image-path": "flux_paper_image/2410.08783_1728930416.png"
        },

        {
            "startTime": "06:54",
            "arxivId": "2410.08526",
            "arxivLink": "https://arxiv.org/abs/2410.08526",
            "title": "AI's Got Feelings: Why We Need to Talk About Anthropomorphic AI",
            "institute": "Stanford University, Carnegie Mellon University, Microsoft Research",
            "text": "This paper argues that the growing prevalence of anthropomorphic behaviors in GenAI systems requires a dedicated focus on understanding their social impacts. It highlights the need for conceptual clarity, measurement tools, and mitigation strategies specifically tailored to address the unique challenges posed by AI systems that appear human-like.",
            "paper-title": "\"I Am the One and Only, Your Cyber BFF\": Understanding the Impact of GenAI Requires Understanding the Impact of Anthropomorphic AI",
            "image-path": "flux_paper_image/2410.08526_1728928704.png"
        },

        {
            "startTime": "07:12",
            "arxivId": "2410.08432",
            "arxivLink": "https://arxiv.org/abs/2410.08432",
            "title": "Data-Sharing Diet: How to Feed Your AI Model Without Breaking the Bank",
            "institute": "University of Chicago, Capital One",
            "text": "This research proposes Mycroft, a framework that allows model trainers to evaluate the usefulness of data from private entities without acquiring their entire dataset. This differs from previous work by focusing on identifying small, relevant subsets of data that can significantly improve model performance.",
            "paper-title": "MYCROFT: Towards Effective and Efficient External Data Augmentation",
            "image-path": "flux_paper_image/2410.08432_1728929449.png"
        },

        {
            "startTime": "07:35",
            "arxivId": "2410.08922",
            "arxivLink": "https://arxiv.org/abs/2410.08922",
            "title": "AI Code: Don't Just Copy, Engage!",
            "institute": "University of Toronto, CMU",
            "text": "This research explores the design space of cognitive engagement techniques for AI-generated code, focusing on how to prevent skill degradation by encouraging deeper interaction with the code rather than simply accepting it passively. This approach differs from previous work that focused on limiting or discouraging the use of AI-generated code.",
            "paper-title": "Exploring the Design Space of Cognitive Engagement Techniques with AI-Generated Code for Enhanced Learning",
            "image-path": "flux_paper_image/2410.08922_1728928539.png"
        },

        {
            "startTime": "07:55",
            "arxivId": "2410.08923",
            "arxivLink": "https://arxiv.org/abs/2410.08923",
            "title": "Latent ODEs Go on a Diet: Path-Minimizing Loss for Better Extrapolation",
            "institute": "Princeton University",
            "text": "This paper introduces a new loss function for latent ODE models that penalizes the path length of the latent representation in time. This differs from previous work that typically uses a variational penalty on the latent space.",
            "paper-title": "Path-minimizing Latent ODEs for improved extrapolation and inference",
            "image-path": "flux_paper_image/2410.08923_1728928376.png"
        },

        {
            "startTime": "08:15",
            "arxivId": "2410.08593",
            "arxivLink": "https://arxiv.org/abs/2410.08593",
            "title": "Fine-Grained Video Understanding: A New Benchmark for VCMR with a Twist!",
            "institute": "Tsinghua University",
            "text": "This research introduces a new benchmark for Video Corpus Moment Retrieval (VCMR) that focuses on fine-grained understanding. Unlike previous benchmarks, this one requires models to retrieve the best-matched moment from a video corpus given a query that describes specific details, even when other partially matched candidates exist.",
            "paper-title": "VERIFIED: A Video Corpus Moment Retrieval Benchmark for Fine-Grained Video Understanding",
            "image-path": "flux_paper_image/2410.08593_1728929051.png"
        },

        {
            "startTime": "08:38",
            "arxivId": "2410.08948",
            "arxivLink": "https://arxiv.org/abs/2410.08948",
            "title": "LLMs: From Chatbots to Convention Creators!",
            "institute": "City University of London, IT University of Copenhagen, Pioneer Centre for AI...",
            "text": "This research investigates the emergence of social conventions in populations of Large Language Models (LLMs) through simulated interactions. Unlike previous work that focused on human-human interactions, this study explores how LLMs can spontaneously develop norms and biases without explicit programming.",
            "paper-title": "The Dynamics of Social Conventions in LLM populations: Spontaneous Emergence, Collective Biases and Tipping Points",
            "image-path": "flux_paper_image/2410.08948_1728928873.png"
        },

        {
            "startTime": "09:04",
            "arxivId": "2410.08972",
            "arxivLink": "https://arxiv.org/abs/2410.08972",
            "title": "Active Learning Gets a Makeover: Interpolation to the Rescue!",
            "institute": "University of Cambridge",
            "text": "This research proposes a new active learning method called ALVIN, which uses intra-class interpolations between examples from under-represented and well-represented groups to create anchors. These anchors help the model identify informative instances that mitigate shortcut learning.",
            "paper-title": "ALVIN: Active Learning Via INterpolation",
            "image-path": "flux_paper_image/2410.08972_1728930755.png"
        },

        {
            "startTime": "09:27",
            "arxivId": "2410.08397",
            "arxivLink": "https://arxiv.org/abs/2410.08397",
            "title": "AI Doctor's Orders: Language-Powered Medical Image Analysis",
            "institute": "Massachusetts Institute of Technology, Massachusetts General Hospital, Harvard Medical School",
            "text": "This research introduces VoxelPrompt, a framework that uses a language agent to iteratively predict instructions for analyzing medical images. Unlike previous work, VoxelPrompt combines natural language processing with image analysis, allowing for more flexible and nuanced tasks.",
            "paper-title": "VoxelPrompt: A Vision-Language Agent for Grounded Medical Image Analysis",
            "image-path": "flux_paper_image/2410.08397_1728930962.png"
        },

        {
            "startTime": "09:46",
            "arxivId": "2410.08328",
            "arxivLink": "https://arxiv.org/abs/2410.08328",
            "title": "AI Agents: Thinking Fast and Slow, Like Us!",
            "institute": "Google DeepMind",
            "text": "This research proposes a dual-system architecture for AI agents, inspired by the human \"thinking fast and slow\" model. It separates the agent into a fast, intuitive \"Talker\" for conversation and a slower, more deliberative \"Reasoner\" for complex planning and reasoning. This approach differs from previous work by explicitly modeling beliefs about the user and incorporating them into the agent's responses.",
            "paper-title": "Agents Thinking Fast and Slow: A Talker-Reasoner Architecture",
            "image-path": "flux_paper_image/2410.08328_1728928385.png"
        },

        {
            "startTime": "10:04",
            "arxivId": "2410.08377",
            "arxivLink": "https://arxiv.org/abs/2410.08377",
            "title": "Saving Moms with AI: A Restless Bandit's Guide to Vital Sign Monitoring",
            "institute": "Harvard University",
            "text": "This research tackles the problem of allocating scarce wireless vital sign monitoring devices in resource-constrained settings by introducing a novel restless multi-armed bandit (RMAB) model that incorporates real-world constraints like minimum and maximum monitoring durations.",
            "paper-title": "Optimizing Vital Sign Monitoring in Resource-Constrained Maternal Care: An RL-Based Restless Bandit Approach",
            "image-path": "flux_paper_image/2410.08377_1728931614.png"
        },

        {
            "startTime": "10:29",
            "arxivId": "2410.08968",
            "arxivLink": "https://arxiv.org/abs/2410.08968",
            "title": "LLMs Get a Safety Makeover: Now with Customizable Ethics!",
            "institute": "Johns Hopkins University, Microsoft",
            "text": "This research proposes a new framework called Controllable Safety Alignment (CoSA) that allows large language models (LLMs) to adapt to diverse safety requirements without retraining. This is different from previous approaches that typically align models to a fixed set of safety principles, creating a one-size-fits-all model.",
            "paper-title": "Controllable Safety Alignment: Inference-Time Adaptation to Diverse Safety Requirements",
            "image-path": "flux_paper_image/2410.08968_1728929374.png"
        },

        {
            "startTime": "10:49",
            "arxivId": "2410.08994",
            "arxivLink": "https://arxiv.org/abs/2410.08994",
            "title": "Downsampling Done Right: A New Recipe for Imbalanced Data",
            "institute": "Duke University, Stanford University, Yahoo",
            "text": "This paper explores optimal downsampling for imbalanced classification using generalized linear models. It proposes a new pseudo maximum likelihood estimator and provides theoretical guarantees for its asymptotic normality. Unlike previous work, this study also offers guidance on selecting the optimal downsampling rate.",
            "paper-title": "Optimal Downsampling for Imbalanced Classification with Generalized Linear Models",
            "image-path": "flux_paper_image/2410.08994_1728930580.png"
        },

        {
            "startTime": "11:08",
            "arxivId": "2410.08475",
            "arxivLink": "https://arxiv.org/abs/2410.08475",
            "title": "LLMs Get a Knowledge Boost: Sparsity is the New Black!",
            "institute": "University of Pennsylvania, UC Los Angeles, UC Berkeley",
            "text": "This research introduces GIVE, a framework that uses sparse knowledge graphs to inspire LLMs to reason more effectively. Unlike previous methods that rely on dense knowledge bases, GIVE leverages the structure of the knowledge graph to guide the LLM's reasoning process.",
            "paper-title": "GIVE: Structured Reasoning with Knowledge Graph Inspired Veracity Extrapolation",
            "image-path": "flux_paper_image/2410.08475_1728930910.png"
        },

        {
            "startTime": "11:29",
            "arxivId": "2410.08633",
            "arxivLink": "https://arxiv.org/abs/2410.08633",
            "title": "Transformers Learn to Think Step-by-Step: Parity Solved with Chain of Thought!",
            "institute": "University of Tokyo",
            "text": "This paper analyzes how transformers learn to solve complex problems by breaking them down into smaller steps, similar to how humans reason. It focuses on the k-parity problem, which is known to be impossible to solve directly with gradient-based algorithms. The paper shows that by incorporating intermediate states into the loss function, transformers can learn parity efficiently, even without explicit supervision.",
            "paper-title": "Transformers Provably Solve Parity Efficiently with Chain of Thought",
            "image-path": "flux_paper_image/2410.08633_1728928413.png"
        },

        {
            "startTime": "11:58",
            "arxivId": "2410.08431",
            "arxivLink": "https://arxiv.org/abs/2410.08431",
            "title": "AI Doctors: Can GPT-4 Beat Anesthesiologists at Pre-Op?",
            "institute": "Singapore General Hospital, Duke-NUS Medical School, Singapore National Eye Centre...",
            "text": "This research distinguishes itself by evaluating the accuracy of Retrieval Augmented Generation (RAG) models in a real-world clinical setting, specifically for preoperative assessments. Unlike previous studies that focused on general LLM capabilities, this study examines the performance of RAG models tailored to specific medical guidelines.",
            "paper-title": "oRetrieval Augmented Generation for 10 Large Language Models and its Generalizability in Assessing Medical Fitness",
            "image-path": "flux_paper_image/2410.08431_1728929278.png"
        },

        {
            "startTime": "12:20",
            "arxivId": "2410.08362",
            "arxivLink": "https://arxiv.org/abs/2410.08362",
            "title": "Scrubbing Away Heart Disease: A New Policy for Cleaner Air, Healthier Hearts",
            "institute": "Harvard University, UCLA",
            "text": "This research introduces novel policy learning methods based on Q- and A-Learning to determine the optimal policy under arbitrary bipartite network interference (BNI). Previous work has focused on causal inference under BNI, but this paper extends the analysis to policy learning, which involves finding the best intervention strategy to achieve a desired outcome.",
            "paper-title": "Towards Optimal Environmental Policies: Policy Learning under Arbitrary Bipartite Network Interference",
            "image-path": "flux_paper_image/2410.08362_1728928973.png"
        },

        {
            "startTime": "12:46",
            "arxivId": "2410.08394",
            "arxivLink": "https://arxiv.org/abs/2410.08394",
            "title": "Money Laundering on the Blockchain? We've Got Your Number!",
            "institute": "MIT, IBM",
            "text": "This research focuses on identifying money laundering subgraphs on the blockchain by tracking the initial senders and final receivers of funds, rather than analyzing the entire subgraph structure. This approach is more efficient and scalable than previous methods that rely on complex graph neural networks.",
            "paper-title": "Identifying Money Laundering Subgraphs on the Blockchain",
            "image-path": "flux_paper_image/2410.08394_1728930456.png"
        },

        {
            "startTime": "13:09",
            "arxivId": "2410.08390",
            "arxivLink": "https://arxiv.org/abs/2410.08390",
            "title": "Fraudsters Beware: AI Now Knows the Rules of the Game!",
            "institute": "University of Illinois, ByteDance, eBay...",
            "text": "This research introduces KnowGraph, a framework that integrates domain knowledge into graph neural networks for anomaly detection. Unlike previous work that relies solely on data-driven approaches, KnowGraph incorporates human-defined rules to enhance the model's performance and generalization capabilities.",
            "paper-title": "KnowGraph: Knowledge-Enabled Anomaly Detection via Logical Reasoning on Graph Data",
            "image-path": "flux_paper_image/2410.08390_1728930784.png"
        },

        {
            "startTime": "13:33",
            "arxivId": "2410.08696",
            "arxivLink": "https://arxiv.org/abs/2410.08696",
            "title": "LLMs Get Branching Out: Multi-Branched Prompts for Smarter AI",
            "institute": "Chinese Academy of Sciences, Microsoft",
            "text": "This research introduces AMPO, a method that automatically creates multi-branched prompts for LLMs. Unlike previous methods that focus on single-flow instructions, AMPO leverages failure cases to identify patterns and adapt the prompt structure accordingly.",
            "paper-title": "AMPO: Automatic Multi-Branched Prompt Optimization",
            "image-path": "flux_paper_image/2410.08696_1728929098.png"
        },

        {
            "startTime": "13:56",
            "arxivId": "2410.08703",
            "arxivLink": "https://arxiv.org/abs/2410.08703",
            "title": "Attention, Attention! RoPE's Secret Weapon for Long Text: Higher Dimensions Rule!",
            "institute": "Tsinghua University",
            "text": "This research delves into the specific roles of different dimensions within Rotary Positional Embeddings (RoPE) in long-text modeling. It goes beyond previous work by analyzing the correlation between each dimension and the distance between tokens, identifying \"Positional Heads\" that are crucial for long-range information interaction.",
            "paper-title": "On the token distance modeling ability of higher RoPE attention dimension",
            "image-path": "flux_paper_image/2410.08703_1728931422.png"
        },

        {
            "startTime": "14:22",
            "arxivId": "2410.09046",
            "arxivLink": "https://arxiv.org/abs/2410.09046",
            "title": "Diffusion Models: Linear Convergence on Manifolds, It's a Thing!",
            "institute": "University of Oxford",
            "text": "This paper improves upon previous work by demonstrating that the number of steps required for diffusion models to converge in KL divergence is linear (up to logarithmic terms) in the intrinsic dimension 'd' of the data manifold. This is a significant improvement over previous results that showed polynomial dependence on 'd'.",
            "paper-title": "Linear Convergence of Diffusion Models Under the Manifold Hypothesis",
            "image-path": "flux_paper_image/2410.09046_1728931027.png"
        },

        {
            "startTime": "14:41",
            "arxivId": "2410.08327",
            "arxivLink": "https://arxiv.org/abs/2410.08327",
            "title": "Privacy-Preserving Language Models: Can We Share Sensitive Data Without Getting Caught?",
            "institute": "Johns Hopkins University, CMU, Amazon",
            "text": "This research evaluates the feasibility of using synthetic data generated from differentially private language models in place of real data for NLP tasks in high-stakes domains like healthcare and child protective services. Unlike previous work, this study focuses on real high-stakes domains and conducts use-inspired evaluations to assess data quality, privacy, and fairness.",
            "paper-title": "Evaluating Differentially Private Synthetic Data Generation in High-Stakes Domains",
            "image-path": "flux_paper_image/2410.08327_1728930918.png"
        },

        {
            "startTime": "15:04",
            "arxivId": "2410.08531",
            "arxivLink": "https://arxiv.org/abs/2410.08531",
            "title": "Diffusion Models: Visual Priors Give Image Generation a Boost!",
            "institute": "University of Sydney, Shanghai AI Laboratory, Chinese University of Hong Kong...",
            "text": "This research introduces a multi-stage generation framework called Diffusion on Diffusion (DoD) that uses visual priors from previously generated samples to guide the diffusion model. This differs from conventional class-guided diffusion models that rely solely on class embeddings, which provide limited conditional information.",
            "paper-title": "Diffusion Models Need Visual Priors for Image Generation",
            "image-path": "flux_paper_image/2410.08531_1728928862.png"
        },

        {
            "startTime": "15:32",
            "arxivId": "2410.08669",
            "arxivLink": "https://arxiv.org/abs/2410.08669",
            "title": "Motion Prediction Gets a Smart Pretrain: Learning from Multiple Datasets!",
            "institute": "SenseTime Research, CUHK, University of Toronto...",
            "text": "This research proposes SmartPretrain, a self-supervised learning framework for motion prediction that is both model-agnostic and dataset-agnostic. Unlike previous methods that focus on specific models or single datasets, SmartPretrain can be applied to a wide range of models and leverage multiple datasets, enhancing its scalability and generalizability.",
            "paper-title": "SmartPretrain: Model-Agnostic and Dataset-Agnostic Representation Learning for Motion Prediction",
            "image-path": "flux_paper_image/2410.08669_1728928458.png"
        },

        {
            "startTime": "15:53",
            "arxivId": "2410.08326",
            "arxivLink": "https://arxiv.org/abs/2410.08326",
            "title": "AI on the Edge: NPU and CIM Team Up for Faster, Smarter AR/VR!",
            "institute": "CMU, Meta",
            "text": "This research introduces a novel neural architecture search (NAS) framework, H4H-NAS, specifically designed for heterogeneous edge systems combining Neural Processing Units (NPUs) and Compute-In-Memory (CIM) architectures. This approach differs from previous NAS methods by considering the unique characteristics of both NPU and CIM, enabling the co-design of hybrid CNN/ViT models optimized for these heterogeneous systems.",
            "paper-title": "Neural Architecture Search of Hybrid Models for NPU-CIM Heterogeneous AR/VR Devices",
            "image-path": "flux_paper_image/2410.08326_1728930640.png"
        },

        {
            "startTime": "16:30",
            "arxivId": "2410.08898",
            "arxivLink": "https://arxiv.org/abs/2410.08898",
            "title": "Scaling Up Reasoning: When Big Brains Need Tiny Training Wheels",
            "institute": "Peking University",
            "text": "This paper introduces a new framework called Low-Dimension-to-High-Dimension (LDHD) generalization to analyze the challenges of length generalization in reasoning problems. Unlike previous work that focuses on input sequence length, LDHD generalization considers the inherent scaling challenge in the latent space, where instances are generated from a hidden state variable.",
            "paper-title": "Low-Dimension-to-High-Dimension Generalization And Its Implications for Length Generalization",
            "image-path": "flux_paper_image/2410.08898_1728930870.png"
        },

        {
            "startTime": "16:53",
            "arxivId": "2410.08872",
            "arxivLink": "https://arxiv.org/abs/2410.08872",
            "title": "Big Models, Big Problems: How Overparameterization Makes AI Vulnerable to Subpopulation Attacks",
            "institute": "ETH Zurich, Northeastern University, University of Toronto",
            "text": "This research investigates the relationship between model complexity and susceptibility to subpopulation poisoning attacks, a type of adversarial attack that targets specific subgroups within a dataset. Unlike previous work that focused on backdoor attacks, this study examines how overparameterized models can be manipulated to misclassify entire subpopulations.",
            "paper-title": "Fragile Giants: Understanding the Susceptibility of Models to Subpopulation Attacks",
            "image-path": "flux_paper_image/2410.08872_1728930340.png"
        },

        {
            "startTime": "17:16",
            "arxivId": "2410.08896",
            "arxivLink": "https://arxiv.org/abs/2410.08896",
            "title": "Reinforcement Learning's New Trick: Model-Augmented Data for Stable Training",
            "institute": "University of Toronto, Vector Institute, University of Pennsylvania...",
            "text": "This paper tackles the instability of high update ratio reinforcement learning by introducing a novel method called MAD-TD. Unlike previous approaches that rely on network resets or ensembles, MAD-TD uses a small amount of data generated from a learned world model to stabilize training.",
            "paper-title": "MAD-TD: Model-Augmented Data stabilizes High Update Ratio RL",
            "image-path": "flux_paper_image/2410.08896_1728929467.png"
        },

        {
            "startTime": "17:44",
            "arxivId": "2410.08338",
            "arxivLink": "https://arxiv.org/abs/2410.08338",
            "title": "Time Traveling Street Signs: Defending Against Sneaky Shadow Attacks",
            "institute": "Yale University",
            "text": "This research proposes a novel defense against adversarial attacks on traffic sign classification by leveraging historical images from Google Street View and comparing them to current images. This approach differs from previous work by focusing on real-world scenarios and utilizing readily available data.",
            "paper-title": "Time Traveling to Defend Against Adversarial Example Attacks in Image Classification",
            "image-path": "flux_paper_image/2410.08338_1728930624.png"
        },

        {
            "startTime": "18:01",
            "arxivId": "2410.08806",
            "arxivLink": "https://arxiv.org/abs/2410.08806",
            "title": "LLMs: Code Writers or Code Writers' Assistants?",
            "institute": "Meta",
            "text": "This research proposes a novel approach to code rewriting using LLMs, focusing on generating code transformations instead of directly rewriting code. This differs from previous work that directly uses LLMs for code rewriting.",
            "paper-title": "Don't Transform the Code, Code the Transforms: Towards Precise Code Rewriting using LLMs",
            "image-path": "flux_paper_image/2410.08806_1728928773.png"
        },

        {
            "startTime": "18:22",
            "arxivId": "2410.08309",
            "arxivLink": "https://arxiv.org/abs/2410.08309",
            "title": "Deep Learning's Got a Case of the \"Double-Descent\" Blues!",
            "institute": "Harvard University, NTT Research Inc., University of Michigan",
            "text": "This paper introduces a simplified task called \"Structured Identity Mapping\" (SIM) to study the dynamics of concept learning in deep learning models. Unlike previous work that focused on complex generative models, SIM uses a Gaussian mixture model with structured centroids, allowing for a more precise theoretical analysis.",
            "paper-title": "Dynamics of Concept Learning and Compositional Generalization",
            "image-path": "flux_paper_image/2410.08309_1728929610.png"
        },

        {
            "startTime": "18:51",
            "arxivId": "2410.08847",
            "arxivLink": "https://arxiv.org/abs/2410.08847",
            "title": "Oops, I Did It Again! Language Models Accidentally Unaligning Themselves",
            "institute": "Princeton University",
            "text": "This research focuses on a phenomenon called \"likelihood displacement\" in direct preference optimization (DPO) methods for aligning language models. Unlike previous work that attributed this phenomenon to model capacity or training pipeline limitations, this paper demonstrates that likelihood displacement can occur even in simple settings with a single prompt and single-token responses. It further identifies the underlying causes of this phenomenon, which are related to the model's embedding geometry.",
            "paper-title": "Unintentional Unalignment: Likelihood Displacement in Direct Preference Optimization",
            "image-path": "flux_paper_image/2410.08847_1728931497.png"
        },

        {
            "startTime": "19:19",
            "arxivId": "2410.08368",
            "arxivLink": "https://arxiv.org/abs/2410.08368",
            "title": "Tokenizing Videos Like a Pro: ElasticTok Stretches to Fit Any Scene",
            "institute": "UC Berkeley, Google",
            "text": "This research introduces ElasticTok, a method that adaptively encodes video frames into a variable number of tokens, unlike previous approaches that use a fixed number of tokens. This allows for more efficient encoding of complex scenes while using fewer tokens for simpler ones.",
            "paper-title": "ElasticTok: Adaptive Tokenization for Image and Video",
            "image-path": "flux_paper_image/2410.08368_1728929270.png"
        },

        {
            "startTime": "19:40",
            "arxivId": "2410.08304",
            "arxivLink": "https://arxiv.org/abs/2410.08304",
            "title": "AI Cracks a Century-Old Math Problem: Transformers Find Lyapunov Functions!",
            "institute": "Meta, \u00c9cole des Ponts ParisTech",
            "text": "This research uses a novel backward generation method to train a sequence-to-sequence transformer to discover Lyapunov functions for dynamical systems. Unlike previous work that focused on finding solutions for specific systems, this approach aims to solve the general problem of finding Lyapunov functions for a broader class of systems.",
            "paper-title": "Global Lyapunov functions: a long-standing open problem in mathematics, with symbolic transformers",
            "image-path": "flux_paper_image/2410.08304_1728928562.png"
        },

        {
            "startTime": "20:02",
            "arxivId": "2410.08352",
            "arxivLink": "https://arxiv.org/abs/2410.08352",
            "title": "COVID-19's Twitter Talk: How Words Change With the Times",
            "institute": "University of Surrey, Zhejiang University, Xi\u2019an Jiaotong-Liverpool University...",
            "text": "This research introduces an unsupervised dynamic word embedding method that captures semantic shifts in social media data without relying on predefined anchor words. This approach addresses the challenges of data sparseness, imbalanced distributions, and synergistic semantic effects, which are common in social media text analysis.",
            "paper-title": "Revealing COVID-19's Social Dynamics: Diachronic Semantic Analysis of Vaccine and Symptom Discourse on Twitter",
            "image-path": "flux_paper_image/2410.08352_1728929819.png"
        },

        {
            "startTime": "20:25",
            "arxivId": "2410.08567",
            "arxivLink": "https://arxiv.org/abs/2410.08567",
            "title": "Depth Inpainting for See-Through and Mirror-Like Objects: A Diffusion-Based Approach",
            "institute": "Tsinghua University",
            "text": "This research proposes a two-stage depth inpainting framework called DITR, specifically designed for transparent and reflective objects. Unlike previous methods that often treat depth loss from different sources (optical and geometric) as a single issue, DITR distinguishes between these two types of depth loss and applies separate diffusion-based inpainting strategies for each.",
            "paper-title": "Diffusion-Based Depth Inpainting for Transparent and Reflective Objects",
            "image-path": "flux_paper_image/2410.08567_1728928613.png"
        },

        {
            "startTime": "20:55",
            "arxivId": "2410.09009",
            "arxivLink": "https://arxiv.org/abs/2410.09009",
            "title": "Semantic Score Distillation Sampling: Giving 3D Objects a Mind of Their Own!",
            "institute": "Peking University",
            "text": "This research introduces a new approach called Semantic Score Distillation Sampling (SEMANTICSDS) for generating 3D scenes from text descriptions. Unlike previous methods that rely on coarse layout guidance, SEMANTICSDS incorporates semantic embeddings to provide more precise control over the generation process.",
            "paper-title": "Semantic Score Distillation Sampling for Compositional Text-to-3D Generation",
            "image-path": "flux_paper_image/2410.09009_1728930318.png"
        },

        {
            "startTime": "21:20",
            "arxivId": "2410.08811",
            "arxivLink": "https://arxiv.org/abs/2410.08811",
            "title": "AI's Got a Backdoor: New Study Exposes LLM Vulnerability to Data Poisoning",
            "institute": "Renmin University of China, Anthropic, University of Oxford...",
            "text": "This research introduces POISONBENCH, a benchmark specifically designed to evaluate the susceptibility of large language models (LLMs) to data poisoning during preference learning. Unlike previous studies that focused on instruction tuning, POISONBENCH targets the preference learning stage, which is crucial for aligning LLMs with human values.",
            "paper-title": "PoisonBench: Assessing Large Language Model Vulnerability to Data Poisoning",
            "image-path": "flux_paper_image/2410.08811_1728929647.png"
        },

        {
            "startTime": "21:48",
            "arxivId": "2410.08530",
            "arxivLink": "https://arxiv.org/abs/2410.08530",
            "title": "Ego3DT: Tracking Every Object in Your Videos, Even the Ones You Didn't Know Were There!",
            "institute": "Zhejiang University, University of Washington, University of Illinois",
            "text": "This research introduces Ego3DT, a novel framework that uses a 3D field representation to track objects in ego-centric videos. Unlike previous methods that rely solely on 2D image tracking, Ego3DT leverages a dynamic hierarchical association mechanism to maintain stable 3D tracking trajectories, even when the camera viewpoint changes drastically.",
            "paper-title": "Ego3DT: Tracking Every 3D Object in Ego-centric Videos",
            "image-path": "flux_paper_image/2410.08530_1728929793.png"
        },

        {
            "startTime": "22:16",
            "arxivId": "2410.08345",
            "arxivLink": "https://arxiv.org/abs/2410.08345",
            "title": "AI Policymakers: From Taxing to Talking!",
            "institute": "University of Oxford, UC Santa Barbara",
            "text": "This research proposes using pre-trained Large Language Models (LLMs) as policymakers in economic simulations, instead of traditional reinforcement learning (RL) methods. This approach leverages the LLMs' ability to process information efficiently and flexibly incorporate nuanced information into their decision-making.",
            "paper-title": "Large Legislative Models: Towards Efficient AI Policymaking in Economic Simulations",
            "image-path": "flux_paper_image/2410.08345_1728928554.png"
        },

        {
            "startTime": "22:38",
            "arxivId": "2410.08946",
            "arxivLink": "https://arxiv.org/abs/2410.08946",
            "title": "Watershed's Waterfall: GPU-Powered Image Segmentation Gets a Speed Boost",
            "institute": "American University of Armenia, University of Oxford, Denovo Sciences LLC",
            "text": "This research introduces a novel parallel waterfall transform for GPUs, which addresses the over-segmentation issue of traditional watershed algorithms by repeatedly applying watershed algorithms to create a hierarchy of image partitions. This approach differs from previous work by utilizing a fully deterministic image partitioning as a pre-processing step for machine learning-based semantic segmentation, potentially replacing the role of superpixel algorithms.",
            "paper-title": "Parallel Watershed Partitioning: GPU-Based Hierarchical Image Segmentation",
            "image-path": "flux_paper_image/2410.08946_1728929131.png"
        },

        {
            "startTime": "23:00",
            "arxivId": "2410.08498",
            "arxivLink": "https://arxiv.org/abs/2410.08498",
            "title": "Hidden Waves: Unmasking the Secret Language of Computational Imaging",
            "institute": "Google, University of North Carolina at Chapel Hill",
            "text": "This research explores the latent space of computational imaging, demonstrating that different imaging modalities, despite their distinct governing equations, share a common set of one-way wave equations in the latent space. This finding extends previous work on single-modality image reconstruction by revealing a hidden property that connects two modalities through their initial conditions.",
            "paper-title": "On a Hidden Property in Computational Imaging",
            "image-path": "flux_paper_image/2410.08498_1728928694.png"
        },

        {
            "startTime": "23:25",
            "arxivId": "2410.08870",
            "arxivLink": "https://arxiv.org/abs/2410.08870",
            "title": "Hopping Mad: Why RL Benchmarks Need a Reality Check",
            "institute": "University of Toronto, University of Pennsylvania",
            "text": "This paper argues that benchmark selection in reinforcement learning (RL) needs to be treated as a scientific discipline in its own right. It highlights the lack of a cohesive understanding of what different benchmark environments represent and how they relate to real-world problems.",
            "paper-title": "Can we hop in general? A discussion of benchmark selection and design using the Hopper environment",
            "image-path": "flux_paper_image/2410.08870_1728930971.png"
        },

        {
            "startTime": "23:46",
            "arxivId": "2410.08260",
            "arxivLink": "https://arxiv.org/abs/2410.08260",
            "title": "Koala-36M: A Video Dataset So Good, It's Bear-y Special!",
            "institute": "Kuaishou Technology, Shenzhen University, Tsinghua University",
            "text": "This research focuses on improving the consistency between fine-grained conditions and video content in large-scale video datasets. Unlike previous datasets that rely on manual thresholds for filtering, this paper introduces a novel Training Suitability Assessment Network (TSA) to model the joint distribution of sub-metrics, resulting in a more accurate and efficient filtering process.",
            "paper-title": "Koala-36M: A Large-scale Video Dataset Improving Consistency between Fine-grained Conditions and Video Content",
            "image-path": "flux_paper_image/2410.08260_1728929531.png"
        },

        {
            "startTime": "24:09",
            "arxivId": "2410.08562",
            "arxivLink": "https://arxiv.org/abs/2410.08562",
            "title": "Crystal Structure Optimization: A New Recipe for Materials Design!",
            "institute": "University of Tokyo, OMRON SINIC X Corp., National Institute of Advanced Industrial Science and Technology (AIST)",
            "text": "This research introduces SMOACS, a framework that directly optimizes input crystal structures for targeted properties using state-of-the-art property prediction models and their gradients. Unlike previous methods, SMOACS can adaptively incorporate constraints without requiring model retraining.",
            "paper-title": "Adaptive Constraint Integration for Simultaneously Optimizing Crystal Structures with Multiple Targeted Properties",
            "image-path": "flux_paper_image/2410.08562_1728929413.png"
        },

        {
            "startTime": "24:36",
            "arxivId": "2410.08578",
            "arxivLink": "https://arxiv.org/abs/2410.08578",
            "title": "Submodular Maximization: A Double-Greedy Bandit's Guide to Winning",
            "institute": "French Institute for Research in Computer Science and Automation, Criteo",
            "text": "This paper introduces a new algorithm, Double-Greedy - Explore-then-Commit (DG-ETC), for unconstrained submodular maximization with stochastic bandit feedback. Unlike previous approaches, DG-ETC adapts the exploration duration for each item, leading to logarithmic problem-dependent regret bounds.",
            "paper-title": "Logarithmic Regret for Unconstrained Submodular Maximization Stochastic Bandit",
            "image-path": "flux_paper_image/2410.08578_1728930924.png"
        },

        {
            "startTime": "24:56",
            "arxivId": "2410.08892",
            "arxivLink": "https://arxiv.org/abs/2410.08892",
            "title": "Federated Learning: From Data Minimization to Privacy by Design",
            "institute": "Google",
            "text": "This research proposes a new definition of Federated Learning (FL) that prioritizes privacy principles over rigid definitions, emphasizing user control and transparency. It also explores the use of Trusted Execution Environments (TEEs) to enhance privacy guarantees and address challenges in scaling FL to large foundation models.",
            "paper-title": "Federated Learning in Practice: Reflections and Projections",
            "image-path": "flux_paper_image/2410.08892_1728931012.png"
        },

        {
            "startTime": "25:17",
            "arxivId": "2410.08435",
            "arxivLink": "https://arxiv.org/abs/2410.08435",
            "title": "Music to Your Ears: Diffusion Models Get a Fine-Grained Tune-Up",
            "institute": "UC Berkeley",
            "text": "This research introduces Fine-grained Textural Guidance (FTG) within diffusion models for symbolic music generation. Unlike previous work, FTG applies harmonic and rhythmic guidance during both training and sampling, enhancing the precision and regularity of generated music.",
            "paper-title": "Symbolic Music Generation with Fine-grained Interactive Textural Guidance",
            "image-path": "flux_paper_image/2410.08435_1728929326.png"
        },

        {
            "startTime": "25:50",
            "arxivId": "2410.08351",
            "arxivLink": "https://arxiv.org/abs/2410.08351",
            "title": "Lip Movements: A New Equation for Speech!",
            "institute": "Yale University",
            "text": "This research proposes a new nonlinear second-order dynamical model for describing labial constriction trajectories, differing from previous work by starting with a minimal assumption of point attractor dynamics and deriving the model from empirical data.",
            "paper-title": "Nonlinear second-order dynamics describe labial constriction trajectories across languages and contexts",
            "image-path": "flux_paper_image/2410.08351_1728930187.png"
        },

        {
            "startTime": "26:16",
            "arxivId": "2410.08288",
            "arxivLink": "https://arxiv.org/abs/2410.08288",
            "title": "AI Learns to Solve Puzzles: Foundation Models for Mixed Integer Linear Programming",
            "institute": "MIT, Microsoft",
            "text": "This research explores the potential of foundation models for Mixed Integer Linear Programming (MILP), a type of optimization problem. Unlike previous work that focused on specific problem classes, this study trains a single model on a diverse set of MILP problems, enabling it to generalize to unseen classes.",
            "paper-title": "Towards Foundation Models for Mixed Integer Linear Programming",
            "image-path": "flux_paper_image/2410.08288_1728928339.png"
        },

        {
            "startTime": "26:39",
            "arxivId": "2410.08787",
            "arxivLink": "https://arxiv.org/abs/2410.08787",
            "title": "Causal Order: From Permutation Puzzles to Differentiable Delights!",
            "institute": "GSK.ai, ETH Z\u00fcrich",
            "text": "This research extends the Intersort algorithm, a method for discovering causal orderings using interventional data, by making it differentiable. This allows for integration into gradient-based learning frameworks, making it scalable to large datasets.",
            "paper-title": "Efficient Differentiable Discovery of Causal Order",
            "image-path": "flux_paper_image/2410.08787_1728930003.png"
        },

        {
            "startTime": "27:03",
            "arxivId": "2410.08833",
            "arxivLink": "https://arxiv.org/abs/2410.08833",
            "title": "Patent-Mined Molecules: A Recipe for Low-Bandgap NIR Stars!",
            "institute": "MIT",
            "text": "This research uses a symmetry-aware fragment decomposition algorithm and a fragment-constrained Monte Carlo Tree Search (MCTS) generator to design low-bandgap molecules, incorporating synthetic accessibility constraints from patent-mined datasets. This approach differs from previous work by explicitly leveraging structural priors from patents to guide the generation process.",
            "paper-title": "Symmetry-Constrained Generation of Diverse Low-Bandgap Molecules with Monte Carlo Tree Search",
            "image-path": "flux_paper_image/2410.08833_1728928607.png"
        },

        {
            "startTime": "27:24",
            "arxivId": "2410.08537",
            "arxivLink": "https://arxiv.org/abs/2410.08537",
            "title": "Learning from Multiple Sources: A Policy's Guide to Robustness",
            "institute": "Stanford University",
            "text": "This research focuses on offline policy learning from multiple heterogeneous data sources, addressing the challenge of ensuring robust performance across diverse target settings. Unlike previous work that primarily focused on single-source data, this paper proposes a minimax regret optimization objective to learn policies that generalize well under various mixtures of source distributions.",
            "paper-title": "Robust Offline Policy Learning with Observational Data from Multiple Sources",
            "image-path": "flux_paper_image/2410.08537_1728931000.png"
        },

        {
            "startTime": "27:48",
            "arxivId": "2410.08316",
            "arxivLink": "https://arxiv.org/abs/2410.08316",
            "title": "HyperDPO: Fine-Tuning LLMs with a Hypernetwork Twist!",
            "institute": "Stanford University, Amazon",
            "text": "This paper introduces HyperDPO, a framework that extends Direct Preference Optimization (DPO) to handle multi-objective fine-tuning. Unlike previous methods, HyperDPO uses a hypernetwork to profile the Pareto front of auxiliary objectives, offering flexible post-training control over trade-offs.",
            "paper-title": "HyperDPO: Hypernetwork-based Multi-Objective Fine-Tuning Framework",
            "image-path": "flux_paper_image/2410.08316_1728929627.png"
        },

        {
            "startTime": "28:13",
            "arxivId": "2410.09027",
            "arxivLink": "https://arxiv.org/abs/2410.09027",
            "title": "A/B Testing Gets a Boost: In-Experiment Data to the Rescue!",
            "institute": "UC Berkeley",
            "text": "This research proposes a novel method for variance reduction in A/B testing by combining pre-experiment and in-experiment data. Unlike existing methods like CUPED and CUPAC, which rely solely on pre-experiment data, this approach leverages the stronger correlation between in-experiment data and the outcome to achieve greater variance reduction.",
            "paper-title": "Variance reduction combining pre-experiment and in-experiment data",
            "image-path": "flux_paper_image/2410.09027_1728929389.png"
        },

        {
            "startTime": "28:42",
            "arxivId": "2410.08727",
            "arxivLink": "https://arxiv.org/abs/2410.08727",
            "title": "Diffusion Models: Losing Their Mind (and Dimensions)",
            "institute": "Bocconi University, OnePlanetResearchCenter, RPI...",
            "text": "This research extends the theory of memorization in generative diffusion models to data supported on manifolds. It shows that different tangent subspaces are lost due to memorization effects at different critical times and dataset sizes, depending on the local variance of the data along their directions.",
            "paper-title": "Losing dimensions: Geometric memorization in generative diffusion",
            "image-path": "flux_paper_image/2410.08727_1728930110.png"
        },

        {
            "startTime": "29:19",
            "arxivId": "2410.08604",
            "arxivLink": "https://arxiv.org/abs/2410.08604",
            "title": "LLMs on the Run? New Fingerprinting Technique Keeps Models From Being Merged Away!",
            "institute": "Tokyo Institute of Technology, University of Tokyo",
            "text": "This research focuses on protecting the intellectual property of large language models (LLMs) by developing a fingerprinting method that is robust against model merging. Unlike previous work that primarily focused on fine-tuning, this paper addresses the growing threat of unauthorized model merging, which can be done without extensive resources or data.",
            "paper-title": "MergePrint: Robust Fingerprinting against Merging Large Language Models",
            "image-path": "flux_paper_image/2410.08604_1728930985.png"
        },

        {
            "startTime": "29:40",
            "arxivId": "2410.08464",
            "arxivLink": "https://arxiv.org/abs/2410.08464",
            "title": "Robot Learning Gets a Reality Check: ARCap Helps Humans Teach Robots the Right Way!",
            "institute": "Stanford University",
            "text": "This research introduces ARCap, a portable data collection system that uses augmented reality (AR) to provide real-time feedback to users collecting data for robot learning. This differs from previous work by directly addressing the issue of data quality during collection, rather than relying on post-processing or expert users.",
            "paper-title": "ARCap: Collecting High-quality Human Demonstrations for Robot Learning with Augmented Reality Feedback",
            "image-path": "flux_paper_image/2410.08464_1728930534.png"
        },

        {
            "startTime": "30:09",
            "arxivId": "2410.08827",
            "arxivLink": "https://arxiv.org/abs/2410.08827",
            "title": "Unlearning: Can We Really Erase AI's Bad Habits?",
            "institute": "Harvard University, Anthropic",
            "text": "This research introduces a new adversarial evaluation method to assess whether unlearning techniques actually remove information from a language model's weights, rather than just making it harder to access. This method involves giving an attacker access to some facts that were supposed to be removed and then seeing if they can recover other facts from the same distribution.",
            "paper-title": "Do Unlearning Methods Remove Information from Language Model Weights?",
            "image-path": "flux_paper_image/2410.08827_1728929286.png"
        },

        {
            "startTime": "30:30",
            "arxivId": "2410.08751",
            "arxivLink": "https://arxiv.org/abs/2410.08751",
            "title": "Imitation Learning Gets a Zero-Shot Makeover: Optimal Transport to the Rescue!",
            "institute": "ETH Zurich",
            "text": "This research introduces a novel method for zero-shot offline imitation learning that directly optimizes the occupancy matching objective using Optimal Transport (OT). Unlike previous approaches that rely on goal-conditioned policies, this method avoids myopic behavior by considering the entire trajectory and its relationship to the expert demonstration.",
            "paper-title": "Zero-Shot Offline Imitation Learning via Optimal Transport",
            "image-path": "flux_paper_image/2410.08751_1728928812.png"
        },

        {
            "startTime": "30:57",
            "arxivId": "2410.08914",
            "arxivLink": "https://arxiv.org/abs/2410.08914",
            "title": "Deep Learning Solves Phase-Field Models: A Nonlocal Love Story!",
            "institute": "University of South Carolina, Oak Ridge National Laboratory, Florida State University...",
            "text": "This research proposes a deep learning method, NPF-Net, to solve nonlocal Allen-Cahn and Cahn-Hilliard phase-field models. Unlike previous work, NPF-Net directly learns the fully discrete operators without requiring ground-truth data for training.",
            "paper-title": "An End-to-End Deep Learning Method for Solving Nonlocal Allen-Cahn and Cahn-Hilliard Phase-Field Models",
            "image-path": "flux_paper_image/2410.08914_1728928591.png"
        },

        {
            "startTime": "31:28",
            "arxivId": "2410.08852",
            "arxivLink": "https://arxiv.org/abs/2410.08852",
            "title": "Robots Learn to Ask for Help When They're Lost!",
            "institute": "CMU",
            "text": "This research introduces a new method for interactive imitation learning that uses conformal prediction to quantify uncertainty in a robot's actions. Unlike previous methods that rely on training data, this approach leverages feedback received during deployment to adapt the robot's uncertainty online.",
            "paper-title": "Conformalized Interactive Imitation Learning: Handling Expert Shift and Intermittent Feedback",
            "image-path": "flux_paper_image/2410.08852_1728931138.png"
        },

        {
            "startTime": "31:52",
            "arxivId": "2410.08439",
            "arxivLink": "https://arxiv.org/abs/2410.08439",
            "title": "Drug-Resistant Cells? Reinforcement Learning to the Rescue!",
            "institute": "CMU, University of Massachusetts Boston",
            "text": "This research introduces a novel non-Markovian model of cell population dynamics, incorporating memory effects into the system. This contrasts with previous work that often focused on Markovian models, which lack the ability to capture the long-term influence of past environmental stressors.",
            "paper-title": "Reinforcement Learning for Control of Non-Markovian Cellular Population Dynamics",
            "image-path": "flux_paper_image/2410.08439_1728928986.png"
        },

        {
            "startTime": "32:14",
            "arxivId": "2410.08576",
            "arxivLink": "https://arxiv.org/abs/2410.08576",
            "title": "AI Data Quality: Cleaning Up the Big Data Mess!",
            "institute": "Meta Inc, JPMorgan Chase, Oracle America Inc...",
            "text": "This research proposes a theoretical framework for an AI-driven data quality monitoring system specifically designed for high-volume data environments. It leverages advanced machine learning and artificial intelligence techniques to address the limitations of current methods.",
            "paper-title": "A Theoretical Framework for AI-driven data quality monitoring in high-volume data environments",
            "image-path": "flux_paper_image/2410.08576_1728929174.png"
        },

        {
            "startTime": "32:36",
            "arxivId": "2410.08917",
            "arxivLink": "https://arxiv.org/abs/2410.08917",
            "title": "Want to Persuade People? Let's Talk Topics!",
            "institute": "Princeton University, Intel, Stanford University",
            "text": "This research introduces a new framework called AutoPersuade, which goes beyond simply identifying the most persuasive message. It aims to uncover the underlying \"topics\" within an argument that drive persuasiveness, allowing for a deeper understanding of why certain messages resonate with audiences. This differs from previous work that primarily focused on identifying the most effective message without delving into the specific features that contribute to its success.",
            "paper-title": "AutoPersuade: A Framework for Evaluating and Explaining Persuasive Arguments",
            "image-path": "flux_paper_image/2410.08917_1728930462.png"
        },

        {
            "startTime": "32:58",
            "arxivId": "2410.08389",
            "arxivLink": "https://arxiv.org/abs/2410.08389",
            "title": "Heating Up Graphs: A Diffusion Kernel Gets a Quasi-Monte Carlo Makeover!",
            "institute": "University of Pennsylvania, Illinois Institute of Technology",
            "text": "This research explores the use of quasi-Monte Carlo graph random features (q-GRFs) with alternative kernel functions, specifically the Diffusion (or Heat), Mat\u00b4ern, and Inverse Cosine kernels, expanding upon previous work that focused solely on the 2-regularized Laplacian kernel.",
            "paper-title": "Heating Up Quasi-Monte Carlo Graph Random Features: A Diffusion Kernel Perspective",
            "image-path": "flux_paper_image/2410.08389_1728929039.png"
        }
    ],
    "stats": {
        "num_pick": 80,
        "num_total": 342,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202410141207_audio.mp3"
}
